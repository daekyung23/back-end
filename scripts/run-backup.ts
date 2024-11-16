import dotenv from 'dotenv'
import { createObjectCsvWriter } from 'csv-writer'
import fs from 'fs'
import path from 'path'
import config from '@config'
import mysql from 'mysql2/promise'

interface TableSchema {
  name: string
  columns: {
    name: string
    type: string
    nullable: boolean
    default?: string
    length?: number
    isPrimary: boolean
    isUnique: boolean
    isGenerated: boolean
    foreignKey?: {
      table: string
      column: string
    }
  }[]
  indices: {
    name: string
    columns: string[]
    isUnique: boolean
  }[]
}

interface ViewSchema {
  name: string
  definition: string
  columns: {
    name: string
    type: string
  }[]
}

interface DBSchema {
  tables: TableSchema[]
  views: ViewSchema[]
}

interface ColumnInfo extends mysql.RowDataPacket {
  name: string
  type: string
  nullable: string
  default_value: string | null
  length: number | null
  key_type: string
  extra: string
}

interface ForeignKeyInfo extends mysql.RowDataPacket {
  column_name: string
  ref_table: string
  ref_column: string
}

interface IndexInfo extends mysql.RowDataPacket {
  name: string
  column_name: string
  non_unique: number
}

interface ViewInfo extends mysql.RowDataPacket {
  name: string
  definition: string
}

// 백업 메타데이터 타입 정의
interface BackupMeta {
  timestamp: string
  migrationVersion: string  // 현재 마이그레이션 버전
  databaseVersion: string   // DB 버전
  tables: string[]         // 백업된 테이블 목록
  recordCounts: {          // 각 테이블별 레코드 수
    [table: string]: number
  }
}

const DATE = new Intl.DateTimeFormat('sv-SE', { 
  dateStyle: 'short',
  timeStyle: 'medium'
})
.format(new Date())
.replace(/:/g, '')  // 콜론 제거
.replace(/\s/g, '_')  // 공백을 언더스코어로 변경

const BACKUP_ROOT = path.join(process.cwd(), 'backups', DATE)
const MIGRATIONS_DIR = path.join(process.cwd(), 'src/migrations')
const SCHEMA_DIR = path.join(BACKUP_ROOT, 'schema')
const DATA_DIR = path.join(BACKUP_ROOT, 'data')

function ensureDirectoryExists(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

async function backup(): Promise<void> {
  try {
    [BACKUP_ROOT, SCHEMA_DIR, DATA_DIR].forEach(ensureDirectoryExists)

    console.log(`\n===================\n  백업 시작: ${DATE}\n===================`)
    
    const pool = mysql.createPool(config.db)
    
    // migrations 테이블 존재 여부 확인
    const [tables] = await pool.query<mysql.RowDataPacket[]>(
      "SELECT TABLE_NAME FROM information_schema.tables WHERE table_schema = ? AND table_name = 'migrations'",
      [config.db.database]
    )
    
    let currentMigration = 'not initialized'
    if (tables.length > 0) {
      const [migrationRows] = await pool.query<mysql.RowDataPacket[]>(
        "SELECT * FROM migrations ORDER BY timestamp DESC LIMIT 1"
      )
      currentMigration = migrationRows[0]?.name || 'unknown'
    }

    // DB 버전 확인
    const [versionRows] = await pool.query<mysql.RowDataPacket[]>('SELECT VERSION() as version')
    const dbVersion = versionRows[0]?.version || 'unknown'

    // 백업 메타데이터 생성
    const meta: BackupMeta = {
      timestamp: DATE,
      migrationVersion: currentMigration,
      databaseVersion: dbVersion,
      tables: [],
      recordCounts: {}
    }
    
    console.log(`\n1. 스키마 백업`)
    await backupSchema()
    
    console.log(`\n2. 데이터 백업`)
    const tableCounts = await backupData()
    meta.tables = Object.keys(tableCounts)
    meta.recordCounts = tableCounts

    console.log(`\n3. VIEW 백업`)
    await backupViews()

    // 메타데이터 저장
    fs.writeFileSync(
      path.join(BACKUP_ROOT, 'meta.json'),
      JSON.stringify(meta, null, 2)
    )

    console.log(`\n===================\n     백업 완료     \n===================`)
    console.log(`백업 위치: ${BACKUP_ROOT}`)
    console.log(`Migration 버전: ${currentMigration}`)
    console.log(`데이터베이스 버전: ${dbVersion}`)
    console.log('백업된 테이블:')
    Object.entries(meta.recordCounts).forEach(([table, count]) => {
      console.log(`  - ${table}: ${count}개 레코드`)
    })

    const viewsDir = path.join(BACKUP_ROOT, 'views')
    if (fs.existsSync(path.join(viewsDir, 'definitions.json'))) {
      const viewDefs = JSON.parse(
        fs.readFileSync(path.join(viewsDir, 'definitions.json'), 'utf8')
      )
      console.log('\n백업된 VIEW:')
      viewDefs.forEach((view: {name: string}) => {
        console.log(`  - ${view.name}`)
      })
    }

    await pool.end()
  } catch (error) {
    console.error('백업 중 오류 발생:', error)
    process.exit(1)
  }
}

async function backupSchema(): Promise<void> {
  const pool = mysql.createPool(config.db)
  const connection = await pool.getConnection()
  
  try {
    const schema: DBSchema = {
      tables: await extractTables(connection),
      views: await extractViews(connection)
    }

    fs.writeFileSync(
      path.join(SCHEMA_DIR, 'schema.json'),
      JSON.stringify(schema, null, 2)
    )
    
    console.log('스키마 백업 완료:', SCHEMA_DIR)
  } finally {
    connection.release()
    await pool.end()
  }
}

async function extractTables(connection: mysql.PoolConnection): Promise<TableSchema[]> {
  const [tables] = await connection.query<mysql.RowDataPacket[]>(`
    SELECT TABLE_NAME 
    FROM information_schema.tables 
    WHERE table_schema = ? 
      AND table_type = 'BASE TABLE'
  `, [config.db.database])

  const tableSchemas: TableSchema[] = []

  for (const { TABLE_NAME } of tables) {
    const [columns] = await connection.query<ColumnInfo[]>(`
      SELECT 
        COLUMN_NAME as name,
        DATA_TYPE as type,
        IS_NULLABLE as nullable,
        COLUMN_DEFAULT as default_value,
        CHARACTER_MAXIMUM_LENGTH as length,
        COLUMN_KEY as key_type,
        EXTRA as extra
      FROM information_schema.columns 
      WHERE table_schema = ? 
        AND table_name = ?
      ORDER BY ordinal_position
    `, [config.db.database, TABLE_NAME])

    const [foreignKeys] = await connection.query<ForeignKeyInfo[]>(`
      SELECT
        COLUMN_NAME as column_name,
        REFERENCED_TABLE_NAME as ref_table,
        REFERENCED_COLUMN_NAME as ref_column
      FROM information_schema.key_column_usage
      WHERE table_schema = ?
        AND table_name = ?
        AND referenced_table_name IS NOT NULL
    `, [config.db.database, TABLE_NAME])

    const [indices] = await connection.query<IndexInfo[]>(`
      SELECT 
        INDEX_NAME as name,
        COLUMN_NAME as column_name,
        NON_UNIQUE as non_unique
      FROM information_schema.statistics
      WHERE table_schema = ?
        AND table_name = ?
    `, [config.db.database, TABLE_NAME])

    tableSchemas.push({
      name: TABLE_NAME,
      columns: columns.map(col => ({
        name: col.name,
        type: col.type,
        nullable: col.nullable === 'YES',
        default: col.default_value ?? undefined,
        length: col.length ?? undefined,
        isPrimary: col.key_type === 'PRI',
        isUnique: col.key_type === 'UNI',
        isGenerated: col.extra.includes('auto_increment'),
        foreignKey: foreignKeys.find(fk => fk.column_name === col.name)
          ? {
              table: foreignKeys.find(fk => fk.column_name === col.name)!.ref_table,
              column: foreignKeys.find(fk => fk.column_name === col.name)!.ref_column
            }
          : undefined
      })),
      indices: Object.values(
        indices.reduce<Record<string, { name: string; columns: string[]; isUnique: boolean }>>((acc, idx) => {
          if (!acc[idx.name]) {
            acc[idx.name] = {
              name: idx.name,
              columns: [],
              isUnique: !idx.non_unique
            }
          }
          acc[idx.name].columns.push(idx.column_name)
          return acc
        }, {})
      )
    })
  }

  return tableSchemas
}

async function extractViews(connection: mysql.PoolConnection): Promise<ViewSchema[]> {
  const [views] = await connection.query<ViewInfo[]>(`
    SELECT 
      TABLE_NAME as name,
      VIEW_DEFINITION as definition
    FROM information_schema.views 
    WHERE table_schema = ?
  `, [config.db.database])

  const viewSchemas: ViewSchema[] = []

  for (const view of views) {
    const [columns] = await connection.query<ColumnInfo[]>(`
      SELECT 
        COLUMN_NAME as name,
        DATA_TYPE as type
      FROM information_schema.columns 
      WHERE table_schema = ? 
        AND table_name = ?
      ORDER BY ordinal_position
    `, [config.db.database, view.name])

    viewSchemas.push({
      name: view.name,
      definition: view.definition,
      columns: columns.map(col => ({
        name: col.name,
        type: col.type
      }))
    })
  }

  return viewSchemas
}

// backupData 함수 수정
async function backupData(): Promise<{[table: string]: number}> {
  const pool = mysql.createPool(config.db)
  const connection = await pool.getConnection()
  const tableCounts: {[table: string]: number} = {}
  
  try {
    // VIEW 제외하고 BASE TABLE만 조회
    const [tables] = await connection.query<mysql.RowDataPacket[]>(
      `SELECT table_name 
       FROM information_schema.tables 
       WHERE table_schema = ? 
         AND table_type = 'BASE TABLE'
         AND table_name NOT LIKE '%_view'
       ORDER BY table_name`,
      [config.db.database]
    )
    
    for (const table of tables) {
      const count = await backupTable(connection, table.TABLE_NAME)
      tableCounts[table.TABLE_NAME] = count
    }
    
    return tableCounts
  } finally {
    connection.release()
    await pool.end()
  }
}

// backupTable 함수 수정
async function backupTable(connection: mysql.PoolConnection, tableName: string): Promise<number> {
  try {
    const [columns] = await connection.query<mysql.RowDataPacket[]>(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
      ORDER BY ORDINAL_POSITION
    `, [config.db.database, tableName])

    const [records] = await connection.query<mysql.RowDataPacket[]>(
      `SELECT * FROM \`${tableName}\``
    )
    
    const csvPath = path.join(DATA_DIR, `${tableName}.csv`)
    
    const header = columns.map(col => ({
      id: col.COLUMN_NAME,
      title: col.COLUMN_NAME
    }))
    
    const csvWriter = createObjectCsvWriter({
      path: csvPath,
      header,
      encoding: 'utf8'
    })

    await csvWriter.writeRecords(records)
    console.log(`${tableName}: ${records.length}개 레코드 백업 완료`)
    return records.length
  } catch (error) {
    console.error(`${tableName} 백업 중 오류:`, error)
    throw error
  }
}

async function backupViews(): Promise<void> {
  try {
    const pool = mysql.createPool(config.db)
    
    // VIEW 정의만 백업
    const [views] = await pool.query<mysql.RowDataPacket[]>(`
      SELECT TABLE_NAME, VIEW_DEFINITION 
      FROM information_schema.views 
      WHERE TABLE_SCHEMA = ?
    `, [config.db.database])
    
    const viewsDir = path.join(BACKUP_ROOT, 'views')
    ensureDirectoryExists(viewsDir)

    // VIEW 정의 저장
    const viewDefinitions = views.map(view => ({
      name: view.TABLE_NAME,
      definition: view.VIEW_DEFINITION
    }))
    
    fs.writeFileSync(
      path.join(viewsDir, 'definitions.json'),
      JSON.stringify(viewDefinitions, null, 2)
    )

    console.log(`VIEW 정의 업 완료: ${views.length}개`)
    await pool.end()
  } catch (error) {
    console.error('VIEW 백업 중 오류:', error)
    throw error
  }
}

backup()