import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { ClientBranchSearch, Activation } from '@lib/zod-prisma-types'
import type { Prisma } from '@prisma/client'

export class ClientBranchController extends Controller<'client_branch', 'v_client_branch'> {
  service = services.clientBranch

  search = async (req: Request, res: Response) => {
    const { items, metadata } = await this.service.search(req.validated.query as ClientBranchSearch)
    const totalPages = Math.ceil(metadata.total / metadata.pageSize)
    res.status(200).json({ clientBranches: items, totalPages })
  }

  changeActivation = async (req: Request, res: Response) => {
    const result = await this.service.changeActivation(
      req.validated.body as Prisma.client_branchWhereUniqueInput & Activation
    )
    res.status(200).json(result)
  }
} 