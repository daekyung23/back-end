import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { prisma } from '@lib/prisma'

async function pushViews() {
  try {
    // 1. 기존 view 목록 조회
    const views = await prisma.$queryRaw`
      SELECT TABLE_NAME 
      FROM information_schema.VIEWS 
      WHERE TABLE_SCHEMA = DATABASE()
    ` as Array<{ TABLE_NAME: string }>

    // 2. 기존 view 모두 삭제
    for (const view of views) {
      await prisma.$executeRawUnsafe(`DROP VIEW IF EXISTS ${view.TABLE_NAME}`)
      console.log(`Dropped view: ${view.TABLE_NAME}`)
    }

    // 3. SQL 파일들 읽어서 view 재생성
    const sqlDir = join(process.cwd(), 'prisma/views/mydb')
    const sqlFiles = readdirSync(sqlDir).filter(file => file.endsWith('.sql'))

    for (const file of sqlFiles) {
      const sql = readFileSync(join(sqlDir, file), 'utf-8')
      try {
        await prisma.$executeRawUnsafe(`CREATE VIEW ${file.replace('.sql', '')} AS ${sql}`)
        console.log(`Created view from: ${file}`)
      } catch (error) {
        console.error(`Error creating view ${file}:`, error)
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