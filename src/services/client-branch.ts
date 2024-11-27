import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma, CreateInputData, DeleteInput } from '@lib/prisma'
import type { Activation } from '@schemas'
import type { client_branch } from '@prisma/client'
import type { SearchQuery, SearchResult } from '@base/types'
import type { UpdateInputUnique } from '@lib/prisma'
import type { Simplify } from 'type-fest'

const MODEL = 'client_branch' as const
const VIEW = 'v_client_branch' as const

export class ClientBranchService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.client_branch, prisma.v_client_branch)
  // Defined -------------------------------------------------------------------
  findManyByClientId = async (query: Simplify<Pick<client_branch, 'client_id'>>) => {
    return this.repository.findMany({ where: query })
  }

  // Override ------------------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
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
    return { 
      client_branch: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

  // 2. 메서드에서 사용
  override changeActivation = async<U extends keyof UpdateInputUnique<typeof MODEL>>(
    body: Record<U, UpdateInputUnique<typeof MODEL>[U]> & Activation ) => {
    const [uniqueKey] = Object.keys(body) as U[]
    const { [uniqueKey]: uniqueValue, is_active } = body
    const updated = await this.repository.update({ where: { [uniqueKey]: uniqueValue }, data: { is_active } })
    return { [MODEL]: updated } 
  }

  // CRUD override ------------------------------------------------------------
  override create = async (data: CreateInputData<typeof MODEL>) => {
    return await prisma.$transaction(async (tx) => {
      const client_branch = await tx.client_branch.create({ data });
      
      await tx.location.create({
        data: {
          location_type: 'client_branch',
          client_branch_id: client_branch.client_branch_id
        }
      });
      return { client_branch };
    });
  }

  override delete = async<U extends keyof DeleteInput<typeof MODEL>>(
    where: Record<U, DeleteInput<typeof MODEL>[U]>
  ) => {
    return await prisma.$transaction(async (tx) => {
      const client_branch_id = (where as { client_branch_id: number }).client_branch_id;
      await tx.location.deleteMany({ where: { client_branch_id } });
      await tx.client_branch.delete({ where: { client_branch_id } });
    });
  }
}