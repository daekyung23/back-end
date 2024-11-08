import { PrismaClient } from '@prisma/client'

// MySQL 타입을 Prisma 타입으로 변환
export const mysqlToPrismaType = (mysqlType: string): string => {
  const typeMap: { [key: string]: string } = {
    'int': 'Int',
    'bigint': 'BigInt',
    'tinyint': 'Int',
    'smallint': 'Int',
    'mediumint': 'Int',
    'decimal': 'Decimal',
    'float': 'Float',
    'double': 'Float',
    'varchar': 'String',
    'char': 'String',
    'text': 'String',
    'mediumtext': 'String',
    'longtext': 'String',
    'datetime': 'DateTime',
    'timestamp': 'DateTime',
    'date': 'DateTime',
    'time': 'DateTime',
    'boolean': 'Boolean',
    'tinyint(1)': 'Boolean',
    'json': 'Json'
  }

  const baseType = mysqlType.toLowerCase().split('(')[0]
  return typeMap[baseType] || 'String'
}

// Prisma Client 확장
export const prismaExtensions = {
  // View 관련 확장
  views: {
    // View 목록 조회
    async list(prisma: PrismaClient) {
      return await prisma.$queryRaw`
        SELECT 
          TABLE_NAME as viewName,
          VIEW_DEFINITION as definition
        FROM information_schema.VIEWS 
        WHERE TABLE_SCHEMA = DATABASE()
      ` as Array<{ viewName: string; definition: string }>
    },

    // View 컬럼 정보 조회
    async columns(prisma: PrismaClient, viewName: string) {
      return await prisma.$queryRaw`
        SELECT 
          COLUMN_NAME as name,
          DATA_TYPE as type,
          IS_NULLABLE as nullable,
          COLUMN_KEY as keyType
        FROM information_schema.COLUMNS
        WHERE 
          TABLE_SCHEMA = DATABASE()
          AND TABLE_NAME = ${viewName}
        ORDER BY ORDINAL_POSITION
      ` as Array<{
        name: string
        type: string
        nullable: string
        keyType: string
      }>
    },

    // View 스키마 생성
    generateSchema(viewName: string, columns: Array<{
      name: string
      type: string
      nullable: string
      keyType: string
    }>) {
      const fields = columns.map(col => {
        const type = mysqlToPrismaType(col.type)
        const nullable = col.nullable === 'YES' ? '?' : ''
        const unique = ['PRI', 'UNI'].includes(col.keyType) ? ' @unique' : ''
        return `  ${col.name} ${type}${nullable}${unique}`
      }).join('\n')

      const dbName = process.env.DATABASE_NAME || 'mydb'

      return `/// @view
view ${viewName} {
${fields}

  @@map("${viewName.toLowerCase()}")
  @@schema("${dbName}")
}
`
    }
  }
} 