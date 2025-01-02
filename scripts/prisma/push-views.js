import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import { config } from '../config.js'
import { topologicalSort } from '../utils/topologicalSort.js'
import { VIEW_DEPENDENCIES } from './view-dependencies.js'

const prisma = new PrismaClient({
  datasources: {
    db: { url: config.db.url }
} })

async function pushViews() {
  try {
    console.log(`Using DATABASE_URL: ${process.env.DATABASE_URL}`)
    // 1. 기존 view 목록 조회
    const views = await prisma.$queryRaw`
      SELECT TABLE_NAME 
      FROM information_schema.VIEWS 
      WHERE TABLE_SCHEMA = DATABASE()
    `

    // 2. 기존 view 모두 삭제
    for (const view of views) {
      await prisma.$executeRawUnsafe(`DROP VIEW IF EXISTS ${view.TABLE_NAME}`)
    }
    console.log('All views dropped successfully!')

    // 3. SQL 파일들 읽어서 view 재생성
    const sqlDir = join(process.cwd(), 'prisma/views/mydb')
    const sqlFiles = readdirSync(sqlDir).filter(file => file.endsWith('.sql'))
    
    // 의존성이 없는 view들 먼저 생성
    for (const file of sqlFiles) {
      const viewName = file.replace('.sql', '')
      // 의존성이 정의된 view는 건너뛰기
      if (VIEW_DEPENDENCIES[viewName]) continue
      
      const sql = readFileSync(join(sqlDir, file), 'utf-8')
      try {
        await prisma.$executeRawUnsafe(
          `CREATE VIEW ${viewName} AS ${sql}`
        )
        console.log(`Created view: ${viewName}`)
      } catch (error) {
        console.error(`Error creating view ${file}:`, error)
        throw error
      }
    }

    // 의존성이 있는 view들 순서대로 생성
    const sortedDependentViews = topologicalSort(VIEW_DEPENDENCIES)
    for (const viewName of sortedDependentViews) {
      const fileName = `${viewName}.sql`
      const sql = readFileSync(join(sqlDir, fileName), 'utf-8')
      try {
        await prisma.$executeRawUnsafe(
          `CREATE VIEW ${viewName} AS ${sql}`
        )
        console.log(`Created view: ${viewName}`)
      } catch (error) {
        console.error(`Error creating view ${viewName}:`, error)
        throw error
      }
    }

    console.log('All views recreated successfully!')
  } catch (error) {
    console.error('Error pushing views:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

pushViews() 