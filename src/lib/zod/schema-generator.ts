import { z } from 'zod'
import { PrismaModel, PrismaField } from './parser/types'

export class SchemaGenerator {
  constructor(private readonly model: PrismaModel) {}

  // 기본 필드 스키마 생성
  private generateFieldSchema(field: PrismaField): z.ZodType<any> {
    let schema = this.getBaseTypeSchema(field)
    
    if (field.isList) {
      schema = z.array(schema)
    }
    
    return field.isRequired ? schema : schema.optional()
  }

  // 기본 타입 스키마 생성
  private getBaseTypeSchema(field: PrismaField): z.ZodType<any> {
    switch (field.type) {
      case 'String':
        return field.name.includes('email') 
          ? z.string().email()
          : z.string()
      case 'Int':
        return z.coerce.number().int()
      case 'Float':
        return z.coerce.number()
      case 'Boolean':
        return z.boolean()
      case 'DateTime':
        return z.coerce.date()
      default:
        return z.any()
    }
  }

  // Primary Key 스키마
  private generatePrimaryKeySchema(model: PrismaModel) {
    // View 테이블은 건너뛰기
    if (this.model.name.startsWith('v_')) {
      return z.object({})
    }
  
    const primaryField = model.fields.find(f => f.isPrimary)
    if (!primaryField) throw new Error(`No primary key found in table: ${model.name}`)
  
    return z.object({
      [primaryField.name]: this.generateFieldSchema(primaryField)
    })
  }

  // 생성 스키마
  generateCreateSchema(): z.ZodObject<any> {
    const shape: z.ZodRawShape = {}
    
    this.model.fields
      .filter((f: PrismaField) => !f.isPrimary && !f.hasDefaultValue)
      .forEach((field: PrismaField) => {
        shape[field.name] = this.generateFieldSchema(field)
      })

    return z.object(shape)
  }

  // 수정 스키마
  generateUpdateSchema(): z.ZodObject<any> {
    return this.generateCreateSchema().partial()
  }

  // 전체 스키마 생성
  generate() {
    const primaryKey = this.generatePrimaryKeySchema(this.model)
    const createData = this.generateCreateSchema()
    const updateData = this.generateUpdateSchema()

    return {
      base: primaryKey.merge(createData),
      primaryKey,
      updateByPrimaryKey: primaryKey.merge(updateData),
      updateData,
      createData,
      deleteByPrimaryKey: primaryKey,

      unique: (key: string) => {
        const field = this.model.fields.find(f => f.name === key && (f.isUnique || f.isPrimary))
        if (!field) throw new Error(`Invalid key: ${key}`)
        
        return z.object({ [key]: this.generateFieldSchema(field) })
      },

      // 특정 키로 업데이트/삭제하는 메서드
      updateBy: (key: string) => {
        const field = this.model.fields.find(f => f.name === key && (f.isUnique || f.isPrimary))
        if (!field) throw new Error(`Invalid key: ${key}`)
        
        return z.object({ [key]: this.generateFieldSchema(field) }).merge(updateData)
      },

      deleteBy: (key: string) => {
        const field = this.model.fields.find(f => f.name === key && (f.isUnique || f.isPrimary))
        if (!field) throw new Error(`Invalid key: ${key}`)
        
        return z.object({ [key]: this.generateFieldSchema(field) })
      }
    }
  }
} 