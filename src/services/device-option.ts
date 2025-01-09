import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma, UpdateInputUnique, UncheckedUpdateInput } from '@lib/prisma'
import type { v_device_option, device_option } from '@prisma/client'
import type { SearchQuery, SearchResult } from '@base/types'
import type { Simplify } from 'type-fest'
import type { Prisma } from '@prisma/client'
import type { Activation } from '@schemas'
import { CSV } from '@utils/csv'

const MODEL = 'device_option' as const
const VIEW = 'v_device_option' as const
export class DeviceOptionService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.device_option, prisma.v_device_option)
  
  // Defined At Controller & Service ------------------------------------------
  getManufacturerOptions = async () => {
    const result = await this.repository.findMany({ 
      distinct: ['manufacturer'],
      select: { manufacturer: true }
    })
    return result
  }

  getOptionTypeOptions = async (query: Pick<v_device_option, 'manufacturer'>) => {
    const result = await this.repository.findMany({ 
      where: { manufacturer: query.manufacturer }, 
      distinct: ['option_type'],
      select: { manufacturer: true, option_type: true }
    })
    return result
  }

  getOptionModelNameOptions = async (query: Pick<v_device_option, 'manufacturer' | 'option_type'>) => {
    const result = await this.repository.findMany({ 
      where: { manufacturer: query.manufacturer, option_type: query.option_type }, 
      distinct: ['option_model_name'],
      select: { manufacturer: true, option_type: true, option_model_id: true, option_model_name: true }
    })
    return result
  }

  getByOptionModelId = async (query: Pick<v_device_option, 'option_model_id'>) => {
    const result = await this.repository.findMany({
       where: { 
        option_model_id: query.option_model_id ,
        is_active: 1,
        location_type: 'warehouse'
      },
    })
    return result
  }

  changeLocation = async (body: UncheckedUpdateInput<typeof MODEL>) => {
    const { device_option_id, location_type, location_warehouse_id, location_device_id } = body
    const result = await this.repository.update({ 
      where: { device_option_id }, 
      data: { location_type, location_warehouse_id, location_device_id } 
    })
    return result
  }

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

  override changeActivation = async<U extends keyof UpdateInputUnique<typeof MODEL>>(
    body: Record<U, UpdateInputUnique<typeof MODEL>[U]> & Activation ) => {
    const [uniqueKey] = Object.keys(body) as U[]
    const { [uniqueKey]: uniqueValue, is_active } = body
    const updated = await this.repository.update({ where: { [uniqueKey]: uniqueValue }, data: { is_active } })
    return { [MODEL]: updated }
  }

  override getCsvData = async () => {
    const data = await this.repository.findMany({})
    return data.map((record: any) => {
      return Object.entries(record).map(([_, value]) => {
        if (value === null) return CSV.NULL
        if (value === '') return CSV.EMPTY
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value.replace(/"/g, '""')}"`
        }
        return value
      }).join(',')
    })
  }
}