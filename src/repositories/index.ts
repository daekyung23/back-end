import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'

export const customRepositories= {
  // ... 추가 기능이 필요한 리포지토리들
} as const

export const baseRepositories = {
  clientBranch: new Repository<'client_branch', 'v_client_branch'>(prisma.client_branch, prisma.v_client_branch),
  client: new Repository<'client', 'v_client'>(prisma.client, prisma.v_client),
  // ... 기본 CRUD만 필요한 리포지토리들
} as const

export const repositories = {
  ...baseRepositories,
  ...customRepositories
} as const

export type Repositories = typeof repositories
