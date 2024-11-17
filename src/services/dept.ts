import { Service } from '@base/service'
import type { Search } from '@lib/zod'
import { prisma } from '@lib/prisma'
import { Repository } from '@base/repository'
import type { dept } from '@prisma/client'
import type { Simplify } from 'type-fest'
import type { SearchQuery, SearchResult } from '@base/types'

const MODEL = 'dept' as const
const VIEW = 'v_dept' as const
export class DeptService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.dept, prisma.v_dept)
  modelRepository = new Repository<typeof MODEL>(prisma.dept)

  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page } = query  
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { dept_1: { contains: search_term } },
        { dept_2: { contains: search_term } },
        { dept_3: { contains: search_term } },
      ],
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      dept: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

  getDeptNameById = async (query: Pick<dept, 'dept_id'>) => {
    const dept: dept = await this.modelRepository.findOne({ where: query })
    return { dept_name: dept.dept_name }
  }

  getDeptIdByName = async (query: Pick<dept, 'dept_name'>) => {
    const dept: dept = await this.modelRepository.findOne({ where: query })
    return { dept_id: dept.dept_id }
  }

  getChildDeptById = async (query: Pick<dept, 'dept_id'>) => {
    const dept = await this.modelRepository.findMany({ 
      where: { parent_dept_id: query.dept_id } })
    return { dept }
  }
}