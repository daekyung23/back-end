import { Service } from '@base/service'
import { repositories } from '@repositories'
import type { ClientBranchSearch, Activation } from '@lib/zod-prisma-types'
import type { Prisma } from '@prisma/client'

export class ClientBranchService extends Service<'client_branch', 'v_client_branch'> {
  repository = repositories.clientBranch

  public search = async (query: ClientBranchSearch) => {
    const { search_term, page, is_active } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { client_branch_name: { contains: search_term } },
        { branch_mgr_name: { contains: search_term } },
        { branch_mgr_mobile_num: { contains: search_term } },
        { branch_mgr_office_num: { contains: search_term } },
        { branch_mgr_email: { contains: search_term } },
      ],
      is_active
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { items, metadata: { total, page, pageSize: take } }
  }

  public changeActivation = async (body: Prisma.client_branchWhereUniqueInput & Activation) => {
    const { client_branch_id, is_active } = body
    return this.repository.update({ where: { client_branch_id }, data: { is_active } })
  }
}
