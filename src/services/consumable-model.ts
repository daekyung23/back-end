import type { Simplify } from 'type-fest'
import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { SearchQuery, SearchResult } from '@base/types'

const MODEL = 'consumable_model' as const
const VIEW = 'v_consumable_model' as const
export class ConsumableModelService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.consumable_model, prisma.v_consumable_model)

  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page, consumable_type } = query 
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { manufacturer: { contains: search_term } },
        { model_name: { contains: search_term } },
        { consumable_name: { contains: search_term } },
      ],
      consumable_type
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      consumable_model: items, 
      totalPages: Math.ceil(total / take) 
    }
  }
}

