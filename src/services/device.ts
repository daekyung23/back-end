import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { SearchQuery, SearchResult } from '@base/types'
import type { Simplify } from 'type-fest'

const MODEL = 'device' as const
const VIEW = 'v_device' as const
export class DeviceService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.device, prisma.v_device)

  // Override ------------------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { model_name: { contains: search_term } },
        { serial: { contains: search_term } },
        { client_branch_name: { contains: search_term } },
      ],
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      device: items, 
      totalPages: Math.ceil(total / take) 
    }
  }
}