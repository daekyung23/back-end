import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { CreateInputData } from '@lib/prisma'

const MODEL = 'consumable_model' as const
const VIEW = 'v_consumable_model' as const
export class ConsumableModelController extends Controller<typeof MODEL, typeof VIEW> {
  service = services.consumableModel

  createWithDeviceModelIds = async (req: Request, res: Response) => {
    const result = await this.service
      .createWithDeviceModelIds(req.validated.body as 
        CreateInputData<typeof MODEL> & { device_model_ids: number[] })
    res.json(result)
  }
} 