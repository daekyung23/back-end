import { Service } from '@base/service'
import { repositories } from '@repositories'
import type { ClientSearch, Activation } from '@lib/zod-prisma-types'
import type { Prisma } from '@prisma/client'
import type { client } from '@lib/zod-prisma-types'

export class ClientService extends Service<'client', 'v_client'> {
  repository = repositories.client

  search = async (query: ClientSearch) => {
    const { search_term, page, is_active, client_rate } = query 
    const take = 10
    const skip = (page - 1) * take
    const where = {
      AND: [
        { client_name: { contains: search_term } },
        { parent_client_id: null }, 
        { is_active },
        { rate_type: client_rate }
      ]
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { items, metadata: { total, page, pageSize: take } }
  }

  checkDuplicateByName = async (query: Pick<client, 'client_name'>) => {
    const count = await this.repository.count({ where: { client_name: query.client_name } })
    return count > 0
  }

  getSubClientsById = async (params: Prisma.clientWhereUniqueInput) => {
    return this.repository.findMany({ where: { parent_client_id: params.client_id } })
  }

  changeActivation = async (query: Prisma.clientWhereUniqueInput & Activation) => {
    const { client_id, is_active } = query
    return this.repository.update({ where: { client_id }, data: { is_active } })
  }
}

