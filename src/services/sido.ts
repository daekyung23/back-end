import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { Simplify } from 'type-fest'
import type { v_sido } from '@prisma/client'


const MODEL = 'sido' as const
const VIEW = 'v_sido' as const

export class SidoService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.sido, prisma.v_sido)
  // Defined -------------------------------------------------------------------
  getSidoBySigunguId = async (query: Simplify<Pick<v_sido, 'sigungu_id'>>) => {
    const sido = await this.repository.findMany({ where: query })
    return { sido }
  }
}