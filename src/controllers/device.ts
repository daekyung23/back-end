import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { CreateInputData, FindManyInput } from '@lib/prisma'

const MODEL = 'device' as const
const VIEW = 'v_device' as const
export class DeviceController extends Controller<typeof MODEL, typeof VIEW> {
  service = services.device
  // Defined At Controller & Service -------------------------------------------
  createWithWarehouseId = async (req: Request, res: Response) => {
    const result = await this.service
      .createWithWarehouseId(req.validated.body as 
        CreateInputData<typeof MODEL> & { warehouse_id: number })
    res.json(result)
  }
} 