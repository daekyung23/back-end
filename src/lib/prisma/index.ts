import { PrismaClient } from '@prisma/client'
import { prismaExtensions } from './extensions'

// Prisma Client 인스턴스 생성 및 확장
export const prisma = new PrismaClient()
export const extensions = prismaExtensions

// 타입 익스포트
export type { PrismaClient } 
export type PrismaModels = Omit<PrismaClient, `$${string}` | symbol>