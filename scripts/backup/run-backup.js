import { PrismaClient } from '@prisma/client'
import { createObjectCsvWriter } from 'csv-writer'
import prismaInternals from '@prisma/internals'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { config } from '../config.js'

const { getDMMF } = prismaInternals

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.db.url
    }
  }
})

async function getModels() {
  // Prisma 모델만 필터링
  return Object.keys(prisma)
    .filter(key => {
      const value = prisma[key]
      return !key.startsWith('$') && 
        typeof value === 'object' &&
        value !== null &&
        typeof value.findMany === 'function'  // findMany 메서드가 있는지 확인
    })
}

async function backup(options = {}) {
  const {
    type = 'MANUAL',
    message = '',
    name = null
  } = options

  const timestamp = new Date().toISOString()
    .replace(/[:.]/g, '')
    .replace('T', '_')
    .split('.')[0]

  const backupDir = path.join(
    process.cwd(), 
    'backups', 
    name || timestamp
  )

  try {
    // 1. 백업 디렉토리 생성
    fs.mkdirSync(backupDir, { recursive: true })
    
    // 2. 메타데이터 저장
    const meta = {
      timestamp: new Date().toISOString(),
      type,
      message,
      createdBy: process.env.USER || 'unknown',
      prismaVersion: JSON.parse(
        fs.readFileSync(
          path.join(process.cwd(), 'node_modules/@prisma/client/package.json'),
          'utf-8'
        )
      ).version,
      nodeVersion: process.version
    }

    fs.writeFileSync(
      path.join(backupDir, 'backup-info.json'),
      JSON.stringify(meta, null, 2)
    )

    // 3. schema.prisma 복사
    fs.copyFileSync(
      path.join(process.cwd(), 'prisma/schema.prisma'),
      path.join(backupDir, 'schema.prisma')
    )

    // 4. 데이터 백업
    console.log('데이터 백업 시작...')
    const models = await getModels()
    const dataDir = path.join(backupDir, 'data')
    fs.mkdirSync(dataDir)

    // schema.prisma 파일에서 DMMF 정보 가져오기
    const prismaSchema = fs.readFileSync(
      path.join(process.cwd(), 'prisma', 'schema.prisma'),
      'utf-8'
    )
    const dmmf = await getDMMF({ datamodel: prismaSchema })

    for (const model of models) {
      console.log(`${model} 테이블 백업 중...`)
      const data = await prisma[model].findMany()
      
      // 모델의 모든 필드를 가져옴
      const modelInfo = dmmf.datamodel.models.find(m => m.name === model)
      const headers = modelInfo.fields.map(field => field.name)
      
      // CSV 파일 경로
      const csvPath = path.join(dataDir, `${model}.csv`)
      
      // 헤더만이라도 먼저 작성
      fs.writeFileSync(csvPath, headers.join(',') + '\n')
      
      // 데이터가 있으면 추가
      if (data.length > 0) {
        const csvWriter = createObjectCsvWriter({
          path: csvPath,
          header: headers.map(h => ({ id: h, title: h })),
          append: true  // 헤더 다음에 추가
        })
        await csvWriter.writeRecords(data)
      }
    }

    // 5. Prisma View 정의 파일 백업
    console.log('\nPrisma View 정의 백업 중...')
    const viewsDir = path.join(backupDir, 'views')
    fs.mkdirSync(viewsDir, { recursive: true })

    // prisma/views 디렉토리 전체를 복사
    const prismaViewsDir = path.join(process.cwd(), 'prisma', 'views')
    if (fs.existsSync(prismaViewsDir)) {
      const copyDir = (src, dest) => {
        const entries = fs.readdirSync(src, { withFileTypes: true })
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)
          
          if (entry.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true })
            copyDir(srcPath, destPath)
          } else {
            fs.copyFileSync(srcPath, destPath)
          }
        }
      }

      copyDir(prismaViewsDir, viewsDir)
      console.log('View 정의 파일 백업 완료')
    }

    console.log('\n백업 완료!')
    console.log('위치:', backupDir)
    console.log('타입:', type)
    console.log('메시지:', message || '(없음)')

  } catch (error) {
    console.error('백업 실패:', error)
    throw error  // 에러를 상위로 전파
  } finally {
    await prisma.$disconnect()
  }
}

if (process.env.NODE_ENV === undefined) {
  console.error('NODE_ENV가 설정되지 않았습니다.')
  process.exit(1)
}

// CLI에서 직접 실행시
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2)
  const message = args[0] || ''
  
  backup({
    type: 'MANUAL',
    message
  })
}

// default export로 변경
export default backup