import { PrismaClient } from '@prisma/client'
import { createObjectCsvWriter } from 'csv-writer'
import prismaInternals from '@prisma/internals'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { config } from '../config.js'

const { getDMMF } = prismaInternals

// 경로 처리 유틸리티
const normalizePath = pathStr => path.normalize(pathStr)
const resolveRoot = (...paths) => normalizePath(path.resolve(process.cwd(), ...paths))
const safeFileName = name => name
  .replace(/[:<>"/\\|?*]/g, '_')
  .replace(/[:.]/g, '')
  .replace('T', '_')
  .split('.')[0]

const normalizeFileUrl = url => {
  if (!url) return ''
  return url.startsWith('file://')
    ? fileURLToPath(url)
    : fileURLToPath(`file://${url}`)
}

// 기본 경로 설정
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PROJECT_ROOT = normalizePath(process.cwd())

// 백업 관련 경로
const BACKUP_ROOT = resolveRoot('backups')
const BACKUP_DATA_DIR = 'data'
const BACKUP_VIEWS_DIR = 'views'
const BACKUP_INFO_FILE = 'backup-info.json'
const BACKUP_SCHEMA_FILE = 'schema.prisma'

// Prisma 관련 경로
const PRISMA_ROOT = resolveRoot('prisma')
const PRISMA_SCHEMA_PATH = resolveRoot('prisma', 'schema.prisma')
const PRISMA_VIEWS_PATH = resolveRoot('prisma', 'views')
const PRISMA_CLIENT_PKG = resolveRoot(
  'node_modules',
  '@prisma/client/package.json'
)

// 시스템 관련 상수
const SYSTEM_USER = process.env.USER || process.env.USERNAME || 'unknown'
const NODE_ENV = process.env.NODE_ENV

// 파일 관련 상수
const BOM = '\ufeff'
const CSV_ENCODING = 'utf8'
const FILE_MODES = {
  DIR: { recursive: true },
  FILE: { encoding: CSV_ENCODING }
}

// 백업 타입 상수
const BACKUP_TYPES = {
  MANUAL: 'MANUAL',
  AUTO: 'AUTO',
  SCHEDULED: 'SCHEDULED'
}

// Prisma 클라이언트 초기화
const prisma = new PrismaClient({
  datasources: { db: { url: config.db.url } }
})

const getModels = async () => Object.keys(prisma)
  .filter(key => {
    if (key.startsWith('$')) return false
    if (typeof prisma[key] !== 'object') return false
    if (!prisma[key]) return false
    return typeof prisma[key].findMany === 'function'
  })

const createMetadata = (type, message) => ({
  timestamp: new Date().toISOString(),
  type,
  message,
  createdBy: SYSTEM_USER,
  prismaVersion: JSON.parse(
    fs.readFileSync(PRISMA_CLIENT_PKG, FILE_MODES.FILE)
  ).version,
  nodeVersion: process.version
})

const createBackupDirs = backupDir => {
  fs.mkdirSync(backupDir, FILE_MODES.DIR)
  fs.mkdirSync(path.join(backupDir, BACKUP_DATA_DIR), FILE_MODES.DIR)
  fs.mkdirSync(path.join(backupDir, BACKUP_VIEWS_DIR), FILE_MODES.DIR)
}

const copySchema = backupDir => fs.copyFileSync(
  PRISMA_SCHEMA_PATH,
  path.join(backupDir, BACKUP_SCHEMA_FILE)
)

// 상수 정의
const CSV_NULL = '\\N'  // MySQL dump 스타일
const CSV_EMPTY = ''    // 빈 문자열

const createCsvFile = async (model, modelInfo, data, dataDir) => {
  // relation이 아닌 스칼라 필드만 추출
  const headers = modelInfo.fields
    .filter(field => !field.relationName && !field.isList)
    .map(field => field.name)
  
  const csvPath = path.join(dataDir, `${model}.csv`)
  
  // CSV 헤더 작성
  fs.writeFileSync(csvPath, BOM + headers.join(',') + '\n', FILE_MODES.FILE)
  if (!data.length) return

  // relation 필드 제외하고 데이터 정제
  const cleanedData = data.map(record => {
    const cleaned = {}
    headers.forEach(key => {
      if (record[key] === null) {
        cleaned[key] = CSV_NULL
      } else if (record[key] === '') {
        cleaned[key] = CSV_EMPTY
      } else {
        cleaned[key] = record[key]
      }
    })
    return cleaned
  })

  const csvWriter = createObjectCsvWriter({
    path: csvPath,
    header: headers.map(h => ({ id: h, title: h })),
    append: true,
    encoding: CSV_ENCODING
  })
  await csvWriter.writeRecords(cleanedData)
}

const copyDir = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true })
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    
    if (!entry.isDirectory()) return fs.copyFileSync(srcPath, destPath)
    
    fs.mkdirSync(destPath, FILE_MODES.DIR)
    copyDir(srcPath, destPath)
  })
}

const copyViews = backupDir => {
  const viewsDir = path.join(backupDir, BACKUP_VIEWS_DIR)
  if (!fs.existsSync(PRISMA_VIEWS_PATH)) return
  copyDir(PRISMA_VIEWS_PATH, viewsDir)
}

const getBackupDir = (name, timestamp) => path.join(
  BACKUP_ROOT,
  name || safeFileName(timestamp)
)

async function backup({ 
  type = BACKUP_TYPES.MANUAL, 
  message = '', 
  name = null 
} = {}) {
  const timestamp = new Date().toISOString()
  const backupDir = getBackupDir(name, timestamp)

  try {
    createBackupDirs(backupDir)
    
    const meta = createMetadata(type, message)
    fs.writeFileSync(
      path.join(backupDir, BACKUP_INFO_FILE),
      JSON.stringify(meta, null, 2),
      FILE_MODES.FILE
    )

    copySchema(backupDir)

    console.log('데이터 백업 시작...')
    const models = await getModels()
    const dataDir = path.join(backupDir, BACKUP_DATA_DIR)
    
    const schema = fs.readFileSync(PRISMA_SCHEMA_PATH, FILE_MODES.FILE)
    const dmmf = await getDMMF({ datamodel: schema })

    for (const model of models) {
      console.log(`${model} 테이블 백업 중...`)
      const data = await prisma[model].findMany()
      const modelInfo = dmmf.datamodel.models.find(m => m.name === model)
      await createCsvFile(model, modelInfo, data, dataDir)
    }

    console.log('\nPrisma View 정의 백업 중...')
    copyViews(backupDir)

    console.log('\n백업 완료!')
    console.log('위치:', backupDir)
    console.log('타입:', type)
    console.log('메시지:', message || '(없음)')

  } catch (error) {
    console.error('백업 실패:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

if (!NODE_ENV) {
  console.error('NODE_ENV가 설정되지 않았습니다.')
  process.exit(1)
}

const scriptPath = normalizeFileUrl(import.meta.url)
const normalizedArgv = normalizeFileUrl(process.argv[1])
if (scriptPath === normalizedArgv) {
  backup({ 
    type: BACKUP_TYPES.MANUAL, 
    message: process.argv[2] || '' 
  })
}

export default backup