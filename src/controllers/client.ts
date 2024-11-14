import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { client, ClientSearch, Activation } from '@lib/zod-prisma-types'
import type { Prisma } from '@prisma/client'

export class ClientController extends Controller<'client', 'v_client'> {
  service = services.client

  search = async (req: Request, res: Response) => {
    const { items, metadata } = await this.service.search(req.validated.query as ClientSearch)
    const totalPages = Math.ceil(metadata.total / metadata.pageSize)
    res.status(200).json({ clients: items, totalPages })
  }

  checkDuplicateByName = async (req: Request, res: Response) => {
    const boolean: boolean = await this.service.checkDuplicateByName(req.validated.query as Pick<client, 'client_name'>)
    res.status(200).json(boolean)
  }

  getSubClientsById = async (req: Request, res: Response) => {
    const { items } = await this.service.getSubClientsById(req.validated.params as Prisma.clientWhereUniqueInput)
    res.status(200).json({ subClients: items })
  }
  
  changeActivation = async (req: Request, res: Response) => {
    const result = await this.service.changeActivation(
      req.validated.body as Prisma.clientWhereUniqueInput & Activation
    )
    res.status(200).json(result)
  }
} 
