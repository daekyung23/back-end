import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import { device_location_log } from '@prisma/client'

export class DeviceLocationLogController extends Controller<'device_location_log', 'v_device_location_log'> {
  service = services.deviceLocationLog

  // Defined ----------------------------------------------------------------
  searchByDateRange = async (req: Request, res: Response) => {
    const result = await this.service
      .searchByDateRange(req.validated.query as 
        Pick<device_location_log, 'device_id'> & {
          start_date: string
          end_date: string
        })
    res.json(result)
  }
} 