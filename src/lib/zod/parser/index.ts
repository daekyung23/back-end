import { PrismaClient } from '@prisma/client'
import { PrismaModel, PrismaField } from './types'

export class PrismaSchemaParser {
  constructor(private prisma: PrismaClient) {}

  async getDMMF(): Promise<PrismaModel[]> {
    const models = await this.prisma.$queryRaw<any[]>`
      SELECT 
        c.TABLE_NAME as name,
        c.COLUMN_NAME as field_name,
        c.DATA_TYPE as field_type,
        c.IS_NULLABLE as nullable,
        c.COLUMN_KEY as key_type,
        c.ORDINAL_POSITION as position
      FROM information_schema.COLUMNS c
      WHERE c.TABLE_SCHEMA = DATABASE()
      ORDER BY c.TABLE_NAME, c.ORDINAL_POSITION
    `
    return this.transformToSchema(models)
  }

  private transformToSchema(models: any[]): PrismaModel[] {
    const groupedModels = models.reduce((acc, row) => {
      if (!acc[row.name]) {
        acc[row.name] = {
          name: row.name,
          fields: [],
          uniqueFields: []
        }
      }

      acc[row.name].fields.push({
        name: row.field_name,
        type: this.mapDataType(row.field_type),
        isRequired: row.nullable === 'NO',
        isPrimary: row.key_type === 'PRI',
        isUnique: row.key_type === 'UNI',
        hasDefaultValue: false,
        isList: false
      } as PrismaField)

      return acc
    }, {} as Record<string, PrismaModel>)

    return Object.values(groupedModels)
  }

  private mapDataType(mysqlType: string): string {
    const typeMap: { [key: string]: string } = {
      'int': 'Int',
      'bigint': 'BigInt',
      'varchar': 'String',
      'text': 'String',
      'datetime': 'DateTime',
      'timestamp': 'DateTime',
      'date': 'DateTime',
      'enum': 'String',
      'tinyint': 'Int',
      'boolean': 'Boolean'
    }
    return typeMap[mysqlType.toLowerCase()] || 'String'
  }
} 