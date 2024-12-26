import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma, CreateInputData } from '@lib/prisma'
import type { SearchQuery, SearchResult } from '@base/types'
import type { Simplify } from 'type-fest'

const MODEL = 'device' as const
const VIEW = 'v_device' as const
export class DeviceService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.device, prisma.v_device)
  // Defined At Controller & Service -------------------------------------------
  createWithWarehouseId = async (body: CreateInputData<typeof MODEL> & { warehouse_id: number }) => {
    return prisma.$transaction(async (tx) => {
      const { warehouse_id, ...deviceData } = body
  
      // 1) device 생성
      const device = await tx.device.create({ data: deviceData })
      // 2) warehouse 위치 검색
      const location = await tx.location.findFirst({
        where: { warehouse_id }
      })
      if (!location) throw new Error('유효하지 않은 warehouse_id')
      // 3) location_log 생성
      const device_location_log = await tx.device_location_log.create({
        data: {
          device_id: device.device_id,
          location_id: location.location_id,
          location_date: new Date(),
          location_detail: "create device"
        }
      })
      // 4) device에 location_id 업데이트
      await tx.device.update({
        where: { device_id: device.device_id },
        data: { last_location_log_id: device_location_log.device_location_log_id }
      })
      return { [MODEL]: device }
    })
  }
  
  // Override ------------------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page, ...filter } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { model_name: { contains: search_term } },
        { serial: { contains: search_term } },
        { client_branch_name: { contains: search_term } },
      ],
      ...filter
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