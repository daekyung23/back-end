import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'
import type { Search } from '@schemas'
import type { Prisma } from '@prisma/client'
export class WarehouseService extends Service<'warehouse', 'v_warehouse'> {
  repository = new Repository<'warehouse', 'v_warehouse'>(prisma.warehouse, prisma.v_warehouse)

  search = async (query: Search) => {
    const { search_term, page } = query 
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { mgmt_dept_name: { contains: search_term } },
        { warehouse_name: { contains: search_term } },
      ]
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      warehouse: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

  exists = async (query?: Prisma.warehouseWhereInput) => {
    const isExist = await this.repository.exists({ where: query })
    return { isExist }
  }
}

