import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { sigungu } from '@prisma/client'

export class SigunguController extends Controller<'sigungu', 'sigungu'> {
  service = services.sigungu

  getSigunguBySidoId = async (req: Request, res: Response) => {
    const result = await this.service.getSigunguBySidoId(req.validated.params as Pick<sigungu, 'sido_id'>)
    res.status(200).json(result)
  }
} 
