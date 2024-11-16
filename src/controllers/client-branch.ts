import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import { client_branch } from '@prisma/client'

export class ClientBranchController extends Controller<'client_branch', 'v_client_branch'> {
  service = services.clientBranch

  findManyByClientId = async (req: Request, res: Response) => {
    const result = await this.service
      .findManyByClientId(req.validated.query as 
        Pick<client_branch, 'client_id'>)
    res.json(result)
  }
} 