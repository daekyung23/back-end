import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma, CreateInputData, DeleteInput } from '@lib/prisma'
import type { Search } from '@schemas'
import type { Prisma } from '@prisma/client'
export class WarehouseService extends Service<'warehouse', 'v_warehouse'> {
  repository = new Repository<'warehouse', 'v_warehouse'>(prisma.warehouse, prisma.v_warehouse)
  locationRepository = new Repository<'location'>(prisma.location)

  override create = async (body: CreateInputData<'warehouse'>) => {
    return await prisma.$transaction(async (tx) => {
      const warehouse = await tx.warehouse.create({ data: body });
      const location = await tx.location.create({
        data: {
          location_type: 'warehouse',
          warehouse_id: warehouse.warehouse_id
        }
      });
      return { warehouse, location };
    });
  }

  override delete = async<U extends keyof DeleteInput<'warehouse'>>(
    query: Record<U, DeleteInput<'warehouse'>[U]>
  ) => {
    const warehouse_id = (query as { warehouse_id: number }).warehouse_id;
    return await prisma.$transaction(async (tx) => {
      await tx.location.deleteMany({ where: { warehouse_id } });
      await tx.warehouse.delete({ where: { warehouse_id } });
    });
  }

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

