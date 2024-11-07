import mysql from 'mysql2/promise'
import csv from 'csv-parser'
import fs from 'fs'
import { readdir } from 'fs/promises'
import path from 'path'
import readline from 'readline'
import config from '@config'

interface BackupMeta {
  migrationVersion: string
  databaseVersion: string
  recordCounts: { [key: string]: number }
}

interface ViewDefinition {
  name: string
  definition: string
}

interface CsvRecord {
  [key: string]: string | null
}

interface TableColumn {
  name: string
  type: string
  nullable: boolean
  length?: number
  isPrimary: boolean
  isUnique: boolean
  isGenerated: boolean
  default?: string | null
  extra?: string
  foreignKey?: {
    table: string
    column: string
  }
}

interface TableIndex {
  name: string
  columns: string[]
  isUnique: boolean
}

interface TableSchema {
  name: string
  columns: TableColumn[]
  indices: TableIndex[]
}

interface DBSchema {
  tables: TableSchema[]
  views: ViewSchema[]
}

interface ViewSchema {
  name: string
  definition: string
  columns: {
    name: string
    type: string
  }[]
}

// 백업 관리 모듈
const BackupManager = {
  ITEMS_PER_PAGE: 10,

  async getBackupList(): Promise<string[]> {
    const backupsDir = path.join(__dirname, '..', 'backups')
    const dirs = await readdir(backupsDir)
    
    return dirs
      .filter(dir => /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(dir))
      .sort((a, b) => b.localeCompare(a))
  },

  async selectBackup(): Promise<string> {
    const backups = await this.getBackupList()
    if (backups.length === 0) {
      throw new Error('사용 가능한 백업이 없습니다.')
    }

    const answer = await this.promptUser(backups)
    return this.validateAndGetBackup(answer, backups)
  },

  async promptUser(backups: string[]): Promise<string> {
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
      
      backups.slice(start, end).forEach((backup: string, i: number) => {
        console.log(`${start + i + 1}. ${backup}`)
      })

      console.log(`\n페이지 ${currentPage + 1}/${totalPages}`)
      console.log('\n명령어:')
      console.log('숫자 입력: 해당 백업 선택')
      console.log('n: 다음 페이지')
      console.log('p: 이전 페이지')
      console.log('q: 종료')

      const answer = await new Promise<string>(resolve => {
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

  validateAndGetBackup(answer: string, backups: string[]): string {
    const index = parseInt(answer) - 1
    if (isNaN(index) || index < 0 || index >= backups.length) {
      throw new Error('잘못된 선택입니다.')
    }
    return backups[index]
  },

  async validateBackupStructure(backupDate: string): Promise<void> {
    const backupDir = path.join(__dirname, '..', 'backups', backupDate)
    
    // 디렉토리 구조 확인
    console.log('\n백업 구조 확인중...')
    const dirs = await readdir(backupDir)
    console.log('발견된 디렉토리/파일들:', dirs)
    
    // 필요한 파일들 체크
    const required = ['schema', 'data']
    const missing = required.filter(dir => !dirs.includes(dir))
    
    if (missing.length > 0) {
      throw new Error(`필수 디렉토리가 없습니다: ${missing.join(', ')}`)
    }
  }
}

// 데이터 복원 모듈
const RestoreManager = {
  formatDate(value: string | null): string | null {
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

  generateCreateTableSQL(table: TableSchema): string {
    const columns = table.columns.map(col => {
      let def = `\`${col.name}\` `
      
      // ENUM 타입 특별 처리
      if (typeof col.type === 'string' && col.type.toLowerCase().startsWith('enum')) {
        const match = col.type.match(/enum\((\d+)\)/i)
        if (match) {
          // ENUM 값 목록이 숫자로 되어있는 경우 (예: enum(13))
          const count = parseInt(match[1])
          const values = Array.from({length: count}, (_, i) => `'${i + 1}'`)
          def += `ENUM(${values.join(',')})`
        } else {
          // 기본 ENUM 값 설정
          def += `ENUM('user', 'admin')`
        }
      } else {
        def += col.type
        if (col.length) def += `(${col.length})`
      }
      
      if (col.nullable === false) def += ' NOT NULL'
      if (col.default !== undefined) {
        if (col.default === 'CURRENT_TIMESTAMP') {
          def += ` DEFAULT ${col.default}`
        } else if (typeof col.default === 'string') {
          def += ` DEFAULT '${col.default}'`
        } else {
          def += ` DEFAULT ${col.default}`
        }
      }
      if (col.isGenerated) def += ' AUTO_INCREMENT'
      return def
    }).join(',\n')

    let sql = `CREATE TABLE IF NOT EXISTS \`${table.name}\` (\n${columns}`

    // Primary Key
    const primaryColumns = table.columns.filter(col => col.isPrimary).map(col => col.name)
    if (primaryColumns.length > 0) {
      sql += `,\nPRIMARY KEY (${primaryColumns.map(col => `\`${col}\``).join(',')})`
    }

    // Indices (마지막 콤마 제거)
    if (table.indices?.length > 0) {
      sql += ',\n' + table.indices
        .filter(idx => idx.name !== 'PRIMARY')
        .map(idx => {
          const type = idx.isUnique ? 'UNIQUE' : ''
          return `${type} INDEX \`${idx.name}\` (${idx.columns.map(col => `\`${col}\``).join(',')})`
        }).join(',\n')
    }

    sql += '\n)'
    return sql.replace(/,(\s*\n\s*\))/g, '$1')  // 마지막 콤마 제거
  },

  formatColumnType(type: string): string {
    // varchar 타입에 길이 추가
    if (type.toLowerCase() === 'varchar') {
      return 'varchar(255)'
    }
    // enum 타입 처리
    if (type.toLowerCase().startsWith('enum')) {
      return type.replace(/^enum/i, 'ENUM')
    }
    return type
  },

  async restoreSchema(backupDate: string): Promise<void> {
    const schemaDir = path.join(__dirname, '..', 'backups', backupDate, 'schema')
    
    console.log('\n스키마 디렉토리 확인중...')
    const files = await readdir(schemaDir)
    console.log('발견된 스키마 파일들:', files)
    
    const schemaFile = files.find(f => f === 'schema.json')
    if (!schemaFile) {
      throw new Error('스키마 정의 파일을 찾을 수 없습니다.')
    }

    const schemaPath = path.join(schemaDir, schemaFile)
    
    const connection = await mysql.createConnection(config.db)
    try {
      const schemaContent = fs.readFileSync(schemaPath, 'utf8')
      const schema: DBSchema = JSON.parse(schemaContent)
      
      await connection.query('SET FOREIGN_KEY_CHECKS = 0')
      
      // 테이블 생성
      for (const table of schema.tables) {
        try {
          const createTableSQL = this.generateCreateTableSQL(table)
          console.log('\n실행할 SQL:', createTableSQL) // 디버깅용
          await connection.query(createTableSQL)
          console.log(`테이블 생성 완료: ${table.name}`)
        } catch (error: any) {
          console.warn(`테이블 생성 중 경고 (${table.name}): ${error?.message || '알 수 없는 오류'}`)
        }
      }
      
      console.log('스키마 복원 완료')
    } finally {
      await connection.query('SET FOREIGN_KEY_CHECKS = 1')
      await connection.end()
    }
  },

  async restoreViews(backupDate: string): Promise<void> {
    const viewsPath = path.join(__dirname, '..', 'backups', backupDate, 'views', 'definitions.json')
    
    try {
      const viewsContent = fs.readFileSync(viewsPath, 'utf8')
      const views: ViewDefinition[] = JSON.parse(viewsContent)
      
      if (views.length === 0) {
        console.log('복원할 view가 없습니다.')
        return
      }

      const connection = await mysql.createConnection(config.db)
      
      for (const view of views) {
        try {
          await connection.query(`DROP VIEW IF EXISTS \`${view.name}\``)
          await connection.query(view.definition)
          console.log(`View 생성 완료: ${view.name}`)
        } catch (error: any) {
          console.warn(`View 생성 중 경고 (${view.name}): ${error?.message || '알 수 없는 오류'}`)
        }
      }
      
      await connection.end()
    } catch (error) {
      console.warn('View 정의 파일을 읽을 수 없습니다:', error)
    }
  },

  async restoreData(backupDate: string): Promise<void> {
    const pool = mysql.createPool(config.db)
    const connection = await pool.getConnection()
    
    try {
      await connection.query('SET FOREIGN_KEY_CHECKS = 0')
      await connection.beginTransaction()

      const dataDir = path.join(
        __dirname,
        '..',
        'backups',
        backupDate,
        'data'
      )
      const files = await readdir(dataDir)

      for (const file of files) {
        if (file.endsWith('.csv')) {
          const tableName = path.basename(file, '.csv')
          if (tableName !== '_prisma_migrations') {
            const records = await this.readCsvFile(path.join(dataDir, file))
            
            if (records.length > 0 && Object.keys(records[0]).length > 0) {
              await this.restoreTable(connection, tableName, records)
            } else {
              console.log(`${tableName}: 복원할 데이터 없음 (빈 파일)`)
            }
          }
        }
      }

      await connection.commit()
      console.log('데이터 복원 완료')
    } catch (error) {
      await connection.rollback()
      throw error
    } finally {
      await connection.query('SET FOREIGN_KEY_CHECKS = 1')
      connection.release()
      await pool.end()
    }
  },

  async restoreTable(
    connection: mysql.PoolConnection, 
    tableName: string, 
    records: CsvRecord[]
  ): Promise<void> {
    try {
      await connection.query(`TRUNCATE TABLE \`${tableName}\``)

      const columns = Object.keys(records[0])
      const values = records.map(record => columns.map(col => record[col]))
      
      const sql = `INSERT INTO \`${tableName}\` (${columns.map(col => '`' + col + '`').join(', ')}) 
                   VALUES ?`
      
      await connection.query(sql, [values])
      console.log(`${tableName}: ${records.length}개 레코드 복원 완료`)
    } catch (error) {
      throw error
    }
  },

  async readCsvFile(csvPath: string): Promise<CsvRecord[]> {
    const records: CsvRecord[] = []
    const fileStream = fs.createReadStream(csvPath)
    
    return new Promise((resolve, reject) => {
      fileStream
        .pipe(csv({
          mapValues: ({ header, value }: { header: string, value: string }) => {
            if (header.includes('_at')) {
              return this.formatDate(value)
            }
            return value === '' ? null : value
          }
        }))
        .on('data', (data: CsvRecord) => records.push(data))
        .on('end', () => resolve(records))
        .on('error', reject)
    })
  },

  async restore(backupDate: string): Promise<void> {
    await this.restoreSchema(backupDate)
    await this.restoreViews(backupDate)
    await this.restoreData(backupDate)
  }
}

// 복원 실행 함수
async function restore(): Promise<void> {
  try {
    const backupDate = await BackupManager.selectBackup()
    console.log(`\n${backupDate} 백업 복원 시작`)
    
    // 백업 구조 검증 추가
    await BackupManager.validateBackupStructure(backupDate)
    
    const metaPath = path.join(
      __dirname,
      '..',
      'backups',
      backupDate,
      'meta.json'
    )
    
    const meta: BackupMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
    
    console.log('\n복원 정보:')
    console.log(`Migration 버전: ${meta.migrationVersion}`)
    console.log(`데이터베이스 버전: ${meta.databaseVersion}`)
    
    await RestoreManager.restore(backupDate)
    
    console.log('\n복원 완료')
  } catch (error) {
    console.error('복원 중 오류 발생:', error)
    process.exit(1)
  }
}

// 실행
restore()