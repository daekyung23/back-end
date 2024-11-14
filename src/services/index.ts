import { ClientBranchService } from './client-branch'
import { ClientService } from './client'
import { prisma } from '@lib/prisma'
import { Service } from '@base/service'


export const customServices = {
  clientBranch: new ClientBranchService(prisma.client_branch, prisma.v_client_branch),
  client: new ClientService(prisma.client, prisma.v_client),
  // ... 추가 기능이 필요한 서비스들
} as const

export const baseServices = {

  // ... 기본 CRUD만 필요한 서비스들
} as const

export const services = {
  ...baseServices,
  ...customServices
  // ... 다른 서비스들
} as const

export type Services = typeof services