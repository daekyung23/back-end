import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { Simplify } from 'type-fest'
import type { sigungu } from '@prisma/client'


const MODEL = 'sigungu' as const
export class SigunguService extends Service<typeof MODEL> {
  repository = new Repository<typeof MODEL>(prisma.sigungu)
  // Defined -------------------------------------------------------------------
  getSigunguBySidoId = async (query: Simplify<Pick<sigungu, 'sido_id'>>) => {
    const sigungu = await this.repository.findMany({ where: query })
    return { sigungu }
  }
}