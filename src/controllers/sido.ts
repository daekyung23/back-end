import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { v_sido } from '@prisma/client'

export class SidoController extends Controller<'sido', 'v_sido'> {
  service = services.sido

  getSidoBySigunguId = async (req: Request, res: Response) => {
    const result = await this.service.getSidoBySigunguId(req.validated.params as Pick<v_sido, 'sigungu_id'>)
    res.status(200).json(result)
  }
} 
