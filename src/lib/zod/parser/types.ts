// Prisma 모델의 필드를 정의하는 인터페이스
export interface PrismaField {
  name: string
  type: string
  isRequired: boolean
  isPrimary: boolean
  isUnique: boolean
  hasDefaultValue: boolean
  isList: boolean
}

// Prisma 모델 전체를 정의하는 인터페이스
export interface PrismaModel {
  name: string
  fields: PrismaField[]
  uniqueFields: PrismaField[]
}