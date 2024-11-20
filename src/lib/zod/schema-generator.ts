import { z } from 'zod'
import { PrismaModel, PrismaField } from './parser/types'

export class SchemaGenerator {
  private readonly model: PrismaModel

  constructor(model: PrismaModel) {
    if (!model) {
      throw new Error('Model is required for SchemaGenerator')
    }
    this.model = model
  }

  // 기본 필드 스키마 생성
  private generateFieldSchema(field: PrismaField): z.ZodType<any> {
    let schema = this.getBaseTypeSchema(field)
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
  private generatePrimaryKeySchema(): z.ZodObject<any> {
    // 모델 존재 여부 확인
    if (!this.model) {
      throw new Error(`Model is not initialized for SchemaGenerator`)
    }

    // 뷰 테이블 체크
    if (this.model.name.startsWith('v_')) {
      return z.object({})  // 뷰는 빈 객체 반환
    }

    const primaryField = this.model.fields.find((f: PrismaField) => f.isPrimary)
    if (!primaryField) throw new Error(`No primary key found in table: ${this.model.name}`)
  
    return z.object({
      [primaryField.name]: this.generateFieldSchema(primaryField)
    })
  }

  // 생성 스키마
  generateCreateSchema(): z.ZodObject<any> {
    const requiredShape: z.ZodRawShape = {}
    const optionalShape: z.ZodRawShape = {}
    
    this.model.fields
      .filter((f: PrismaField) => !f.isPrimary)
      .forEach((field: PrismaField) => {
        if (field.hasDefaultValue || !field.isRequired) {
          optionalShape[field.name] = this.generateFieldSchema(field).optional()
        } else {
          requiredShape[field.name] = this.generateFieldSchema(field)
        }
      })

    return z.object({ 
      ...requiredShape, 
      ...optionalShape
    })
  }

  // 수정 스키마
  generateUpdateSchema(): z.ZodObject<any> {
    return this.generateCreateSchema().partial()
  }

  // 전체 스키마 생성
  generate() {
    const primaryKey = this.generatePrimaryKeySchema()
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
        const field = this.model.fields.find((f: PrismaField)  => 
          f.name === key && (
            f.isUnique || 
            f.isPrimary || 
            f.name.endsWith('_id')  // 외래키 허용
          )
        )
        
        if (!field) {
          throw new Error(
            `Field "${key}" in table "${this.model.name}" must be unique, primary key, or foreign key`
          )
        }
        
        return z.object({ [key]: this.generateFieldSchema(field) })
      },

      updateBy: (key: string) => {
        const field = this.model.fields.find((f: PrismaField) => 
          f.name === key && (
            f.isUnique || 
            f.isPrimary || 
            f.name.endsWith('_id')  // 외래키 허용
          )
        )
        
        if (!field) {
          throw new Error(
            `Field "${key}" in table "${this.model.name}" must be unique, primary key, or foreign key`
          )
        }
        
        return z.object({ [key]: this.generateFieldSchema(field) }).merge(updateData)
      },

      deleteBy: (key: string) => {
        const field = this.model.fields.find((f: PrismaField) => 
          f.name === key && (
            f.isUnique || 
            f.isPrimary || 
            f.name.endsWith('_id')  // 외래키 허용
          )
        )
        
        if (!field) {
          throw new Error(
            `Field "${key}" in table "${this.model.name}" must be unique, primary key, or foreign key`
          )
        }
        
        return z.object({ [key]: this.generateFieldSchema(field) })
      }
    }
  }
} 