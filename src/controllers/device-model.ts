import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import { device_model } from '@prisma/client'

export class DeviceModelController extends Controller<'device_model'> {
  service = services.deviceModel

  getAllManufacturers = async (req: Request, res: Response) => {
    const result = await this.service.getAllManufacturers()
    res.json(result)
  }

  getModelsByManufacturer = async (req: Request, res: Response) => {
    const result = await this.service.getModelsByManufacturer(req.validated.query as Pick<device_model, 'manufacturer'>)
    res.json(result)
  }
} 