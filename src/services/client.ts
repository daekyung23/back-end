import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma, UpdateInputUnique } from '@lib/prisma'
import type { Activation } from '@lib/zod-prisma-types'
import type { SearchQuery, SearchResult } from '@base/types'
import type { client } from '@prisma/client'
import type { Simplify } from 'type-fest'
import type { Prisma } from '@prisma/client'

const MODEL = 'client' as const
const VIEW = 'v_client' as const
export class ClientService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.client, prisma.v_client)
  // Defined -------------------------------------------------------------------
  getSubClientsById = async (params: Pick<client, 'client_id'>) => {
    return this.repository.findMany({ where: { parent_client_id: params.client_id } })
  }

  // Override ------------------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page, client_rate, is_active } = query 
    const take = 10
    const skip = (page - 1) * take
    const where = {
      AND: [
        { client_name: { contains: search_term } },
        { parent_client_id: null }, 
        { is_active },
        { client_rate }
      ]
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      client: items, 
      totalPages: Math.ceil(total / take) 
    }
  } 

  override changeActivation = async<U extends keyof UpdateInputUnique<typeof MODEL>>(
    body: Record<U, UpdateInputUnique<typeof MODEL>[U]> & Activation ) => {
    const [uniqueKey] = Object.keys(body) as U[]
    const { [uniqueKey]: uniqueValue, is_active } = body
    const updated = await this.repository.update({ where: { [uniqueKey]: uniqueValue }, data: { is_active } })
    return { [MODEL]: updated }
  }

  override exists = async (query?: Pick<Prisma.clientWhereInput, 'client_name'>) => {
    const count = await this.repository.count({ where: query })
    return { isExist: count > 0 }
  } 
}

