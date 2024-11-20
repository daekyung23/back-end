import { PrismaClient } from '@prisma/client'
import { readdir } from 'fs/promises'
import * as fs from 'fs'
import * as path from 'path'
import * as readline from 'readline'
import csv from 'csv-parser'
import prismaInternals from '@prisma/internals'
import { execSync } from 'child_process' 
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import backup from './run-backup.js'
import { config } from '../config.js' 

// 상수 정의
const ITEMS_PER_PAGE = 10
const TRANSACTION_TIMEOUT = 1000 * 60 * 5
const CSV_NULL = '\\N'  // MySQL dump 스타일

// 경로 처리 유틸리티
const normalizePath = pathStr => path.normalize(pathStr)
const resolveRoot = (...paths) => normalizePath(path.resolve(process.cwd(), ...paths))
const normalizeFileUrl = url => {
  if (!url) return ''
  return url.startsWith('file://')
    ? fileURLToPath(url)
    : fileURLToPath(`file://${url}`)
}

// 파일명 처리 유틸리티
const safeFileName = name => name
  .replace(/[:<>"/\\|?*]/g, '_')
  .replace(/[:.]/g, '')
  .replace('T', '_')
  .split('.')[0]


// 기본 경로 설정
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PROJECT_ROOT = normalizePath(process.cwd())
const BACKUP_ROOT = resolveRoot('backups')
const PRISMA_ROOT = resolveRoot('prisma')
const PRISMA_SCHEMA_PATH = resolveRoot('prisma', 'schema.prisma')

// 파일 관련 상수
const BOM = '\ufeff'
const CSV_ENCODING = 'utf8'
const FILE_MODES = {
  DIR: { recursive: true },
  READ: { encoding: CSV_ENCODING }
}

// Prisma 초기화
const { getDMMF } = prismaInternals

// 파일 처리 함수들
const readJsonFile = filePath => {
  try {
    return JSON.parse(fs.readFileSync(filePath, FILE_MODES.READ))
  } catch {
    return null
  }
}

const copyDirectory = (src, dest) => {
  fs.mkdirSync(dest, FILE_MODES.DIR)
  const entries = fs.readdirSync(src, { withFileTypes: true })
  
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    
    entry.isDirectory()
      ? copyDirectory(srcPath, destPath)
      : fs.copyFileSync(srcPath, destPath)
  })
}

const readCsvRecords = csvPath => new Promise((resolve, reject) => {
  const records = []
  fs.createReadStream(csvPath)
    .pipe(csv({
      mapValues: ({ header, value }) => {
        // 빈 값 처리
        if (!value || value.trim() === '') return null
        // 날짜 처리
        if (header.includes('_at')) return formatDate(value)
        return value
      },
      skipEmptyLines: true
    }))
    .on('data', data => {
      // 모든 필드가 null인 레코드는 제외
      const hasValue = Object.values(data).some(v => v !== null && v !== '')
      if (hasValue) records.push(data)
    })
    .on('end', () => {
      // 빈 레코드 제거 후 남은 레코드 수 출력
      const validRecords = records.filter(record => 
        Object.values(record).some(v => v !== null && v !== '')
      )
      console.log(`  총 ${validRecords.length}개 유효 레코드 읽음\n`)
      resolve(validRecords)
    })
    .on('error', reject)
})

const formatDate = value => {
  if (!value) return null
  if (!value.includes('GMT')) return value
  
  try {
    const date = new Date(value)
    return date.toISOString().slice(0, 19).replace('T', ' ')
  } catch (e) {
    console.error('날짜 변환 실패:', value)
    return value
  }
}

const getBackupList = async () => {
  console.log('백업 디렉토리 경로:', BACKUP_ROOT)
  const dirs = await readdir(BACKUP_ROOT)
  console.log('발견된 백업 디렉토리들:', dirs)
  const backups = await Promise.all(
    dirs.map(async dir => {
      const infoPath = path.join(BACKUP_ROOT, dir, 'backup-info.json')
      console.log('정보 파일 경로:', infoPath)
      const info = readJsonFile(infoPath)
      console.log('읽은 정보:', info)
      return info ? { name: dir, ...info } : null
    })
  )
  
  return backups
    .filter(Boolean)
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
}

const displayBackupList = (backups, currentPage) => {
  console.clear()
  console.log('\n사용 가능한 백업 목록:')
  
  const start = currentPage * ITEMS_PER_PAGE
  const end = Math.min(start + ITEMS_PER_PAGE, backups.length)
  
  backups.slice(start, end).forEach((backup, i) => {
    console.log(`${start + i + 1}. [${backup.type}] ${backup.name}`)
    console.log(`   시간: ${backup.timestamp}`)
    console.log(`   메시지: ${backup.message || '(없음)'}`)
    console.log(`   생성자: ${backup.createdBy}\n`)
  })

  const totalPages = Math.ceil(backups.length / ITEMS_PER_PAGE)
  console.log(`\n페이지 ${currentPage + 1}/${totalPages}`)
  console.log('\n명령어: [숫자] 선택, n 다음, p 이전, q 종료')
}

const handleUserInput = (answer, currentPage, totalPages) => {
  if (answer === 'q') return { exit: true }
  if (answer === 'n' && currentPage < totalPages - 1) return { page: currentPage + 1 }
  if (answer === 'p' && currentPage > 0) return { page: currentPage - 1 }
  
  const selection = parseInt(answer)
  if (selection > 0) return { selection: answer }
  
  return { invalid: true }
}

const selectBackup = async () => {
  const backups = await getBackupList()
  if (!backups.length) throw new Error('사용 가능한 백업이 없습니다.')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let currentPage = 0
  const totalPages = Math.ceil(backups.length / ITEMS_PER_PAGE)

  while (true) {
    displayBackupList(backups, currentPage)
    const answer = await new Promise(resolve => rl.question('\n입력: ', resolve))
    const result = handleUserInput(answer.toLowerCase(), currentPage, totalPages)

    if (result.exit) {
      rl.close()
      process.exit(0)
    }
    
    if (result.selection) {
      rl.close()
      const index = parseInt(result.selection) - 1
      if (index >= 0 && index < backups.length) return backups[index].name
      console.log('\n잘못된 선택입니다.')
    }
    
    if (result.page !== undefined) {
      currentPage = result.page
      continue
    }

    if (result.invalid) {
      console.log('\n잘못된 입력입니다.')
      await new Promise(resolve => setTimeout(resolve, 1500))
    }
  }
}

const validateBackupStructure = async backupDate => {
  const backupDir = path.join(BACKUP_ROOT, backupDate)
  const files = await readdir(backupDir)
  
  console.log('\n백업 구조 확인중...')
  console.log('발견된 파일들:', files)
  
  const required = ['schema.prisma', 'data', 'backup-info.json', 'views']
  const missing = required.filter(file => !files.includes(file))
  
  if (missing.length) throw new Error(`필수 파일 누락: ${missing.join(', ')}`)
}

const createAutoBackup = async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '')
  const backupName = `${timestamp}_auto_before_restore`
  
  try {
    await backup({
      name: backupName,
      type: 'AUTO_BEFORE_RESTORE',
      message: '복원 작업 전 자동 백업',
      createdBy: 'SYSTEM'
    })
    return backupName
  } catch (error) {
    console.error('자동 백업 실패:', error)
    throw new Error('자동 백업 실패로 복원 불가')
  }
}

const deleteBackup = async backupName => {
  const backupDir = path.join(BACKUP_ROOT, backupName)
  if (!fs.existsSync(backupDir)) return

  try {
    fs.rmSync(backupDir, { recursive: true, force: true })
    console.log(`자동 백업 삭제 완료: ${backupName}`)
  } catch (error) {
    console.error('자동 백업 삭제 실패:', error)
  }
}

const convertFieldValue = (value, field) => {
  // null 처리
  if (value === CSV_NULL) {
    return null
  }

  // 필드 타입에 따른 변환
  switch (field.type) {
    case 'Int':
      return value === null ? null : parseInt(value) || 0
    case 'Float':
      return value === null ? null : parseFloat(value) || 0
    case 'Boolean':
      return value === '1' || value === 'true' || value === true ? 1 : 0
    case 'DateTime':
      return value === null ? null : new Date(value)
    default:
      return value
  }
}


// 스키마 관련 함수들
const getModelSchema = async modelName => {
  try {
    const schema = fs.readFileSync(PRISMA_SCHEMA_PATH, FILE_MODES.READ)
    const dmmf = await getDMMF({ datamodel: schema })
    
    const model = dmmf.datamodel.models.find(
      m => m.name.toLowerCase() === modelName.toLowerCase()
    )
    
    if (!model) throw new Error(`Model ${modelName} not found`)

    const modelDefinition = schema
      .split('\n')
      .find(line => line.trim().startsWith(`model ${model.name}`) || 
                    line.trim().startsWith(`view ${model.name}`))
    
    return {
      ...model,
      isView: modelDefinition?.trim().startsWith('view') || false
    }
  } catch (error) {
    console.error(`스키마 정보 조회 실패 (${modelName}):`, error)
    throw error
  }
}

// 복원 실행 함수들
const restoreSchema = async (backupDate) => {
  const schemaPath = path.join(BACKUP_ROOT, backupDate, 'schema.prisma')

  fs.copyFileSync(schemaPath, PRISMA_SCHEMA_PATH)
  execSync('npm run raw:prisma:generate:dev', { stdio: 'inherit' })
  console.log('스키마 복원 완료')
}

const restoreTable = async (tx, modelName, records) => {
  if (!records?.length) return
  
  try {
    const model = await getModelSchema(modelName)
    
    if (model.isView) {
      console.log(`${modelName}는 View이므로 복원하지 않습니다.`)
      return
    }

    // 스칼라 필드만 추출
    const scalarFields = model.fields
      .filter(field => !field.relationName && !field.isList)
      .map(field => field.name)
    
    const cleanedRecords = records.map(record => {
      const cleaned = {}
      
      // 스칼라 필드만 복사
      scalarFields.forEach(fieldName => {
        if (record[fieldName] === CSV_NULL) {
          cleaned[fieldName] = null
        } else if (record[fieldName] === '') {
          cleaned[fieldName] = ''
        } else {
          cleaned[fieldName] = convertFieldValue(record[fieldName], 
            model.fields.find(f => f.name === fieldName))
        }
      })

      return cleaned
    })

    await tx[modelName].createMany({
      data: cleanedRecords,
      skipDuplicates: true
    })

  } catch (error) {
    console.error(`${modelName} 복원 실패:`, error)
    throw error
  }
}

const restoreData = async (backupDate, prisma) => {
  const dataDir = path.join(BACKUP_ROOT, backupDate, 'data')
  const files = await readdir(dataDir)

  try {
    await prisma.$transaction(async tx => {
      console.log('트랜잭션 시작...')
      await tx.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 0;')

      for (const file of files) {
        if (!file.endsWith('.csv')) continue
        
        const modelName = file.replace('.csv', '')
        const records = await readCsvRecords(path.join(dataDir, file))
        await restoreTable(tx, modelName, records)
      }

      await tx.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 1;')
    }, {
      timeout: TRANSACTION_TIMEOUT,
      maxWait: TRANSACTION_TIMEOUT,
      isolationLevel: 'Serializable'
    })

    console.log('데이터 복원 성공')
  } catch (error) {
    console.error('데이터 복원 실패:', error)
    throw error
  }
}

const restoreViewDefinitions = async (backupDate, prisma) => {
  const viewsBackupDir = path.join(BACKUP_ROOT, backupDate, 'views')
  if (!fs.existsSync(viewsBackupDir)) return

  console.log('\nView 정의 복원 중...')
  const prismaViewsDir = path.join(PRISMA_ROOT, 'views')
  copyDirectory(viewsBackupDir, prismaViewsDir)
  console.log('View 정의 복원 완료')
}

const restoreViews = async() => {
  execSync('node scripts/prisma/push-views.js', { stdio: 'inherit' })
}

const handleRestoreError = async (error, autoBackupName, prisma) => {
  console.error('복원 실패:', error)
  
  if (!autoBackupName) return
  
  console.log('\n자동 백업으로 복구 시도...')
  try {
    await restoreSchema(autoBackupName)
    await restoreData(autoBackupName, prisma)
    await restoreViewDefinitions(autoBackupName)
    await restoreViews()
    console.log('자동 백업으로 복구 완료')
    await deleteBackup(autoBackupName)
  } catch (rollbackError) {
    console.error('자동 백업 복구 실패:', rollbackError)
    console.error('데이터베이스가 일관되지 않은 상태일 수 있습니다.')
  }
}

// 메인 복원 함수
const restore = async () => {
  console.log('복원 프로세스 시작...')
  let autoBackupName = null
  let prisma = null 
  
  try {
    const backupDate = await selectBackup()
    console.log('선택된 백업:', backupDate)
    
    console.log('\n복원 전 자동 백업 생성...')
    //백업 실행

    autoBackupName = await createAutoBackup()

    console.log(`자동 백업 생성 완료: ${autoBackupName}`)

    console.log(`\n${backupDate} 백업 복원 시작`)
    await validateBackupStructure(backupDate)
    await restoreSchema(backupDate)

    prisma = new PrismaClient({
      datasources: { db: { url: config.db.url } }
    })
    await restoreData(backupDate, prisma)
    await restoreViewDefinitions(backupDate)
    await restoreViews()
    
    if (autoBackupName) {
      await deleteBackup(autoBackupName)
      console.log('자동 백업 삭제 완료')
    }
    
    console.log('\n복원 완료')
    
  } catch (error) {
    await handleRestoreError(error, autoBackupName, prisma)
    process.exit(1)
  } finally {
    // 복원 작업 완료 후 항상 연결 종료
    await prisma.$disconnect()
  }
}

// 환경 검증
if (!process.env.NODE_ENV) {
  console.error('NODE_ENV가 설정되지 않았습니다.')
  process.exit(1)
}

// 스크립트 실행
const scriptPath = normalizeFileUrl(import.meta.url)
const normalizedArgv = normalizeFileUrl(process.argv[1])

if (scriptPath === normalizedArgv) {
  console.log('restore 실행 시작')
  restore().catch(error => {
    console.error('처리되지 않은 오류:', error)
    process.exit(1)
  })
}

export default restore