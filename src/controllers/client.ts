import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { client } from '@prisma/client'

export class ClientController extends Controller<'client', 'v_client'> {
  service = services.client

  getSubClientsById = async (req: Request, res: Response) => {
    const result = await this.service.getSubClientsById(req.validated.params as Pick<client, 'client_id'>)
    res.status(200).json(result)
  }
} 
