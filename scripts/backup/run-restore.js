const { PrismaClient } = require('@prisma/client')
const { execSync } = require('child_process')
const csv = require('csv-parser')
const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')
const readline = require('readline')
const { getDMMF } = require('@prisma/internals')
const { readFileSync } = require('fs')
const { backup } = require('./run-backup')

let prisma = new PrismaClient()

// BackupManager
const BackupManager = {
  ITEMS_PER_PAGE: 10,

  async getBackupList() {
    const backupsDir = path.join(process.cwd(), 'backups')
    const dirs = await readdir(backupsDir)
    
    const backups = await Promise.all(
      dirs.map(async dir => {
        try {
          const infoPath = path.join(backupsDir, dir, 'backup-info.json')
          const info = JSON.parse(fs.readFileSync(infoPath, 'utf8'))
          return {
            name: dir,
            ...info
          }
        } catch {
          return null
        }
      })
    )

    return backups
      .filter(Boolean)
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
  },

  async selectBackup() {
    const backups = await this.getBackupList()
    if (backups.length === 0) {
      throw new Error('사용 가능한 백업이 없습니다.')
    }

    const answer = await this.promptUser(backups)
    return this.validateAndGetBackup(answer, backups)
  },

  async promptUser(backups) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    let currentPage = 0
    const totalPages = Math.ceil(backups.length / this.ITEMS_PER_PAGE)
    
    while (true) {
      console.clear()
      console.log('\n사용 가능한 백업 목록:')
      
      const start = currentPage * this.ITEMS_PER_PAGE
      const end = Math.min(start + this.ITEMS_PER_PAGE, backups.length)
      
      backups.slice(start, end).forEach((backup, i) => {
        console.log(`${start + i + 1}. [${backup.type}] ${backup.name}`)
        console.log(`   시간: ${backup.timestamp}`)
        console.log(`   메시지: ${backup.message || '(없음)'}`)
        console.log(`   생성자: ${backup.createdBy}\n`)
      })

      console.log(`\n페이지 ${currentPage + 1}/${totalPages}`)
      console.log('\n명령어:')
      console.log('숫자 입력: 해당 백업 선택')
      console.log('n: 다음 페이지')
      console.log('p: 이전 페이')
      console.log('q: 종료')

      const answer = await new Promise(resolve => {
        rl.question('\n입력: ', resolve)
      })

      if (answer.toLowerCase() === 'q') {
        rl.close()
        process.exit(0)
      }
      
      if (answer.toLowerCase() === 'n' && currentPage < totalPages - 1) {
        currentPage++
        continue
      }
      
      if (answer.toLowerCase() === 'p' && currentPage > 0) {
        currentPage--
        continue
      }

      const selection = parseInt(answer)
      if (!isNaN(selection) && selection > 0 && selection <= backups.length) {
        rl.close()
        return answer
      }

      console.log('\n잘못된 입력입니다. 다시 시도해주세요.')
      await new Promise(resolve => setTimeout(resolve, 1500))
    }
  },

  validateAndGetBackup(answer, backups) {
    const index = parseInt(answer) - 1
    if (isNaN(index) || index < 0 || index >= backups.length) {
      throw new Error('잘못된 선택입니다.')
    }
    return backups[index].name
  },

  async validateBackupStructure(backupDate) {
    const backupDir = path.join(process.cwd(), 'backups', backupDate)
    
    console.log('\n백업 구조 확인중...')
    const files = await readdir(backupDir)
    console.log('발견된 디렉토리/파일들:', files)
    
    // 필요한 파일들 체크
    const required = ['schema.prisma', 'data']
    const missing = required.filter(file => !files.includes(file))
    
    if (missing.length > 0) {
      throw new Error(`필수 파일/디렉토리가 없습니다: ${missing.join(', ')}`)
    }
  },

  async createAutoBackup() {
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
      console.error('자동 백업 생성 실패:', error)
      throw new Error('자동 백업 생성에 실패했습니다. 복원을 진행할 수 없습니다.')
    }
  },

  async restore(backupDate) {
    try {
      const selectedBackup = await this.selectBackup()
      console.log(`\n${selectedBackup} 백업 복원 시작`)
      
      // 백업 정보 읽기
      const infoPath = path.join(
        process.cwd(),
        'backups',
        selectedBackup,
        'backup-info.json'
      )
      
      const backupInfo = JSON.parse(fs.readFileSync(infoPath, 'utf8'))
      console.log('\n백업 정보:')
      console.log(`타입: ${backupInfo.type}`)
      console.log(`생성 시간: ${backupInfo.timestamp}`)
      console.log(`메시지: ${backupInfo.message || '(없음)'}`)
      console.log(`생성자: ${backupInfo.createdBy}`)

      // 구조 검증
      await this.validateBackupStructure(selectedBackup)
      
      // 복원 진행
      await RestoreManager.restore(selectedBackup)

    } catch (error) {
      console.error('복원 중 오류 발생:', error)
      throw error
    }
  },

  async deleteBackup(backupName) {
    try {
      const backupDir = path.join(process.cwd(), 'backups', backupName)
      if (fs.existsSync(backupDir)) {
        fs.rmSync(backupDir, { recursive: true, force: true })
        console.log(`자동 백업 삭제 완료: ${backupName}`)
      }
    } catch (error) {
      console.error('자동 백업 삭제 실패:', error)
    }
  }
}

async function getModelSchema(modelName) {
  try {
    const schemaPath = path.join(process.cwd(), 'prisma/schema.prisma')
    const schema = fs.readFileSync(schemaPath, 'utf-8')
    const dmmf = await getDMMF({ datamodel: schema })
    
    // 대소문자 구분 없이 모델 찾기
    const model = dmmf.datamodel.models.find(
      m => m.name.toLowerCase() === modelName.toLowerCase()
    )
    
    if (!model) {
      throw new Error(`Model ${modelName} not found in schema`)
    }

    // view 여부 확인
    const modelDefinition = schema
      .split('\n')
      .find(line => line.trim().startsWith(`model ${model.name}`) || 
                    line.trim().startsWith(`view ${model.name}`))
    
    return {
      ...model,
      isView: modelDefinition?.trim().startsWith('view') || false
    }
  } catch (error) {
    console.error(`스키마 정보 가져오기 실패 (${modelName}):`, error)
    throw error
  }
}

function convertFieldValue(value, type) {
  if (value === null || value === undefined) return null
  
  switch(type) {
    case 'Int':
      return parseInt(value)
    case 'Float': 
      return parseFloat(value)
    case 'Boolean':
      return value === 'true'
    case 'DateTime':
      return new Date(value)
    default:
      return value
  }
}

// RestoreManager
const RestoreManager = {
  formatDate(value) {
    if (!value) return null
    
    try {
      if (value.includes('GMT')) {
        const date = new Date(value)
        return date.toISOString().slice(0, 19).replace('T', ' ')
      }
    } catch (e) {
      console.error('날짜 변환 실패:', value)
    }
    return value
  },

  async getModelFields(modelName) {
    const models = await getModelSchema()
    const model = models.find(m => m.name === modelName)
    if (!model) throw new Error(`Model ${modelName} not found in schema`)
    return model.fields
  },

  async restoreSchema(backupDate) {
    const schemaPath = path.join(
      process.cwd(),
      'backups',
      backupDate,
      'schema.prisma'
    )
    
    if (!fs.existsSync(schemaPath)) {
      throw new Error('schema.prisma 파을 찾을  없습니다.')
    }

    // schema.prisma 파일 복사
    fs.copyFileSync(
      schemaPath,
      path.join(process.cwd(), 'prisma/schema.prisma')
    )
    
    // Prisma Client 재생성
    console.log('Prisma Client 재생성 중...')
    execSync('npx prisma generate', { stdio: 'inherit' })
    
    // Prisma Client 재초기화
    await prisma.$disconnect()
    prisma = new PrismaClient()
    
    console.log('스키마 복원 완료')
  },

  async restoreData(backupDate) {
    try {
      await prisma.$transaction(async (tx) => {
        console.log('트랜잭션 시작...')
        
        // 외래키 제약 해제
        await tx.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 0;')

        const dataDir = path.join(process.cwd(), 'backups', backupDate, 'data')
        const files = await readdir(dataDir)

        // 각 테이블별 데이터 복원
        for (const file of files) {
          if (!file.endsWith('.csv')) continue
          
          const modelName = file.replace('.csv', '')
          const records = await this.readCsvFile(path.join(dataDir, file))
          await this.restoreTable(tx, modelName, records)
        }

        // 외래키 제약 복원
        await tx.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 1;')
      }, {
        timeout: 1000 * 60 * 5,
        maxWait: 1000 * 60 * 5,
        isolationLevel: 'Serializable'
      })

      console.log('복원 성공')
    } catch (error) {
      console.error('복원 실패:', error)
      throw error
    }
  },

  async restoreTable(tx, modelName, records) {
    if (!records || records.length === 0) {
      console.log(`${modelName}: 복원할 데이터 없음`)
      return
    }

    try {
      // 스키마 정보로 필드 필터링
      const model = await getModelSchema(modelName)

      // View 테이블은 건너뛰기
      if (model.isView) {
        console.log(`${modelName}: View 테이블은 복원하지 않음`)
        return
      }

      console.log(`${modelName} 테이블 초기화 중...`)
      await tx[modelName].deleteMany()

      const cleanedRecords = records.map(record => {
        const cleaned = {}
        for (const field of model.fields) {
          if (field.kind === 'scalar' && record[field.name] !== undefined) {
            cleaned[field.name] = convertFieldValue(record[field.name], field.type)
          }
        }
        return cleaned
      })

      await tx[modelName].createMany({
        data: cleanedRecords,
        skipDuplicates: true
      })
    } catch (error) {
      console.error(`${modelName} 복원 중 오류:`, error)
      throw error
    }
  },

  async readCsvFile(csvPath) {
    const records = []
    const fileStream = fs.createReadStream(csvPath)
    
    return new Promise((resolve, reject) => {
      fileStream
        .pipe(csv({
          mapValues: ({ header, value }) => {
            if (!value || value.trim() === '') return null
            if (header.includes('_at')) return this.formatDate(value)
            return value
          },
          skipEmptyLines: true  // 빈 줄 건너뛰기
        }))
        .on('data', data => {
          // 모든 필드가 null인 레코드는 제외
          const hasValue = Object.values(data).some(v => v !== null)
          if (hasValue) {
            records.push(data)
          }
        })
        .on('end', () => {
          console.log(`  총 ${records.length}개 레코드 읽음\n`)
          resolve(records)
        })
        .on('error', reject)
    })
  },

  async restoreViews(backupDate) {
    const viewsBackupDir = path.join(
      process.cwd(),
      'backups',
      backupDate,
      'views'
    )

    if (fs.existsSync(viewsBackupDir)) {
      console.log('\nView 정의 복원 중...')
      
      // prisma/views 디렉토리로 복사
      const prismaViewsDir = path.join(process.cwd(), 'prisma', 'views')
      
      const copyDir = (src, dest) => {
        fs.mkdirSync(dest, { recursive: true })
        const entries = fs.readdirSync(src, { withFileTypes: true })
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)
          
          if (entry.isDirectory()) {
            copyDir(srcPath, destPath)
          } else {
            fs.copyFileSync(srcPath, destPath)
          }
        }
      }

      copyDir(viewsBackupDir, prismaViewsDir)
      console.log('View 정의 복원 완료')
    }
  },

  async restore(backupDate) {
    await this.restoreSchema(backupDate)
    await this.restoreData(backupDate)
    await this.restoreViews(backupDate)
  }
}

// restore 함수
async function restore() {
  let autoBackupName = null
  
  try {
    // 1. 복원할 백업 선택
    const backupDate = await BackupManager.selectBackup()
    
    // 2. 선택 후 자동 백업 생성
    console.log('\n복원 전 자동 백업 생성 중...')
    autoBackupName = await BackupManager.createAutoBackup()
    console.log(`자동 백업 생성 완료: ${autoBackupName}`)

    // 3. 복원 시도
    console.log(`\n${backupDate} 백업 복원 시작`)
    await BackupManager.validateBackupStructure(backupDate)
    await RestoreManager.restore(backupDate)
    
    // 4. 복원 성공시 자동 백업 삭제
    if (autoBackupName) {
      await BackupManager.deleteBackup(autoBackupName)
      console.log('자동 백업 삭제 완료')
    }
    
    console.log('\n복원 완료')
    
  } catch (error) {
    // 5. 복원 실패시 자동 백업으로 복구
    if (autoBackupName) {
      console.log('\n자동 백업으로 복구를 시도합니다...')
      try {
        await RestoreManager.restore(autoBackupName)
        console.log('복구 실패: 자동 백업으로 복구 완료')
        await BackupManager.deleteBackup(autoBackupName)
      } catch (rollbackError) {
        console.error('복구 실패: 자동 백업 복구 실패:', rollbackError)
        console.error('데이터베이스가 일관되지 않은 상태일 수 있습니다.')
      }
    }
    
    process.exit(1)
  }
}

// 실행
restore()