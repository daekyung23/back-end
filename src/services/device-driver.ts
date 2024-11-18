import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { Prisma } from '@prisma/client'
import type { SearchQuery } from '@base/types'

const MODEL = 'device_driver' as const
const VIEW = 'v_device_driver' as const

export class DeviceDriverService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.device_driver, prisma.v_device_driver)

  override search = async (query: SearchQuery<typeof VIEW>) => {
    const { search_term, page } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      model_name: { contains: search_term },
      printer_language: { contains: search_term },
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, take, skip }),
      this.repository.count({ where }),
    ])
    return { 
      device_driver: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

  override exists = async (query?: Pick<Prisma.device_driverWhereInput, 'device_model_id' | 'printer_language'>) => {
    const count = await this.repository.count({ where: query })
    return { isExist: count > 0 }
  }
}