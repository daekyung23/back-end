import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import { v_device_option } from '@prisma/client'
import type { UncheckedUpdateInput } from '@lib/prisma'

const MODEL = 'device_option' as const
const VIEW = 'v_device_option' as const
export class DeviceOptionController extends Controller<typeof MODEL, typeof VIEW> {
  service = services.deviceOption

  getManufacturerOptions = async (req: Request, res: Response) => {
    const result = await this.service.getManufacturerOptions()
    res.json(result)
  }

  getOptionTypeOptions = async (req: Request, res: Response) => {
    const result = await this.service.getOptionTypeOptions(req.validated.query as Pick<v_device_option, 'manufacturer'>)
    res.json(result)
  }

  getOptionModelNameOptions = async (req: Request, res: Response) => {
    const result = await this.service.getOptionModelNameOptions(req.validated.query as Pick<v_device_option, 'manufacturer' | 'option_type'>)
    res.json(result)
  }

  getByOptionModelId = async (req: Request, res: Response) => {
    const result = await this.service.getByOptionModelId(req.validated.query as Pick<v_device_option, 'option_model_id'>)
    res.json(result)
  }

  changeLocation = async (req: Request, res: Response) => {
    const result = await this.service.changeLocation(req.validated.body as UncheckedUpdateInput<typeof MODEL>)
    res.json(result)
  }
} 