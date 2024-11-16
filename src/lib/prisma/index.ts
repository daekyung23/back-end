import { PrismaClient } from '@prisma/client'
import { prismaExtensions } from './extensions'

// 환경 변수에 따른 로그 레벨 설정
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'info', 'warn', 'error']
    : ['error'],
})

// Prisma Client 인스턴스 생성 및 확장
export { prisma }
export const extensions = prismaExtensions

export * from './types'
