import { Request, Response } from 'express'
import { Controller } from '@base/controller'
import { services } from '@services'
import { user_position } from '@prisma/client'

export class UserPositionController extends Controller<'user_position'> {
  service = services.userPosition

  findOneByPositionName = async (req: Request, res: Response) => {
    const result = await this.service
      .findOneByPositionName(req.validated.query as 
        Pick<user_position, 'position_name'>)
    res.json(result)
  }
} 