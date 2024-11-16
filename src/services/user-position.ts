import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import { user_position } from '@prisma/client'

const MODEL = 'user_position' as const
export class UserPositionService extends Service<typeof MODEL> {
  repository = new Repository<typeof MODEL>(prisma.user_position)

  findOneByPositionName = async (query: Pick<user_position, 'position_name'>) => {
    return this.repository.findOne({ where: { position_name: query.position_name } })
  }
}

