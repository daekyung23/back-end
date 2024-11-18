import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import type { dept } from '@prisma/client'

export class DeptController extends Controller<'dept', 'v_dept'> {
  service = services.dept

  getDeptNameById = async (req: Request, res: Response) => {
    const result = await this.service.getDeptNameById(req.validated.query as Pick<dept, 'dept_id'>)
    res.status(200).json(result)
  }

  getDeptIdByName = async (req: Request, res: Response) => {
    const result = await this.service.getDeptIdByName(req.validated.query as Pick<dept, 'dept_name'>)
    res.status(200).json(result)
  }

  getChildDeptById = async (req: Request, res: Response) => {
    const result = await this.service.getChildDeptById(req.validated.query as Pick<dept, 'dept_id'>)
    res.status(200).json(result)
  }
}  