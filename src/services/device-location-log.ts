import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { device_location_log } from '@prisma/client'
import type { Simplify } from 'type-fest'

const MODEL = 'device_location_log' as const
const VIEW = 'v_device_location_log' as const

export class DeviceLocationLogService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.device_location_log, prisma.v_device_location_log)
  // Defined -------------------------------------------------------------------
  searchByDateRange = async (query: Simplify<Pick<device_location_log, 'device_id'>> & {
    start_date: string
    end_date: string
  }) => {
    const { device_id, start_date, end_date } = query
    
    return this.repository.findMany({ 
      where: { 
        device_id, 
        location_date: { 
          gte: new Date(start_date),
          lte: new Date(end_date) 
        } 
      }
    })
  }
}