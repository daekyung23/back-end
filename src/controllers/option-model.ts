import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { CreateInputData, FindManyInput } from '@lib/prisma'

const MODEL = 'option_model' as const
const VIEW = 'v_option_model' as const
export class OptionModelController extends Controller<typeof MODEL, typeof VIEW> {
  service = services.optionModel

  getCompatibilityByOptionModelId = async (req: Request, res: Response) => {
    const result = await this.service
      .getCompatibilityByOptionModelId(req.validated.params as FindManyInput<typeof MODEL>)
    res.json(result)
  }

  createWithDeviceModelIds = async (req: Request, res: Response) => {
    const result = await this.service
      .createWithDeviceModelIds(req.validated.body as 
        CreateInputData<typeof MODEL> & { device_model_ids: number[] })
    res.json(result)
  }
} 