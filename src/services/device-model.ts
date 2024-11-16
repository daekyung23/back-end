import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { device_model } from '@prisma/client'
import type { SearchQuery, SearchResult } from '@base/types'
import type { Simplify } from 'type-fest'

const MODEL = 'device_model' as const
export class DeviceModelService extends Service<typeof MODEL> {
  repository = new Repository<typeof MODEL>(prisma.device_model)
  // Defined -------------------------------------------------------------------
  getAllManufacturers = async (): Promise<{ manufacturer: string[] }> => {
    const results = await this.repository.findMany({ 
      distinct: ['manufacturer'],
      select: { manufacturer: true }
    })
    return { manufacturer: results.map((item: any) => item.manufacturer) }
  }

  getModelsByManufacturer = async (query: Pick<device_model, 'manufacturer'>) => {
    return this.repository.findMany({ where: query })
  }
  
  // Override ------------------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof MODEL>>): 
    Promise<SearchResult<typeof MODEL, typeof MODEL>> => {
    const { search_term, page } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { model_name: { contains: search_term } },
        { manufacturer: { contains: search_term } },
      ]
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      device_model: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

}