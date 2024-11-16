import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { Prisma, prisma } from '@lib/prisma'
import type { Activation } from '@lib/zod-prisma-types'
import type { SearchQuery, SearchResult, Search } from '@base/types'
import type { UpdateInputUnique } from '@lib/prisma'
import type { Simplify } from 'type-fest'

const MODEL = 'user' as const
const VIEW = 'v_user' as const

export class UserService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.user, prisma.v_user)
  // Override ------------------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page, is_active } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { dept_name: { contains: search_term } },
        { user_name: { contains: search_term } },
        { login_id: { contains: search_term } },
        { email: { contains: search_term } },
      ],
      is_active
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      user: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

  override exists = async (query: Pick<Prisma.userWhereInput, 'login_id'>) => {
    const { login_id } = query
    const isExist = await this.repository.exists({ where: { login_id } })
    return { isExist }
  } 

  // 2. 메서드에서 사용
  override changeActivation = async<U extends keyof UpdateInputUnique<typeof MODEL>>(
    body: Record<U, UpdateInputUnique<typeof MODEL>[U]> & Activation ) => {
    const [uniqueKey] = Object.keys(body) as U[]
    const { [uniqueKey]: uniqueValue, is_active } = body
    const updated = await this.repository.update({ where: { [uniqueKey]: uniqueValue }, data: { is_active } })
    return { [MODEL]: updated } 
  }
}