import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { device_model } from '@prisma/client'
import type { SearchQuery, SearchResult } from '@base/types'
import type { Simplify } from 'type-fest'
import type { Prisma } from '@prisma/client'

const MODEL = 'device_option' as const
const VIEW = 'v_device_option' as const
export class DeviceOptionService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.device_option, prisma.v_device_option)
  
  // Override ------------------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page, ...filter } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { option_model_name: { contains: search_term } },
        { manufacturer: { contains: search_term } },
      ],
      ...filter
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      device_option: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

  override exists = async (query: Pick<Prisma.device_optionWhereInput, 'serial'>) => {
    const { serial } = query
    const isExist = await this.repository.exists({ where: { serial } })
    return { isExist }
  } 
}