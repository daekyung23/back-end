import type { Simplify } from 'type-fest'
import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'  
import type { SearchQuery, SearchResult } from '@base/types'
import type { CreateInputData } from '@lib/prisma'
import { log } from '@utils/log'

const MODEL = 'consumable_model' as const
const VIEW = 'v_consumable_model' as const
export class ConsumableModelService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.consumable_model, prisma.v_consumable_model)

  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page, consumable_type } = query 
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { manufacturer: { contains: search_term } },
        { model_name: { contains: search_term } },
        { consumable_name: { contains: search_term } },
      ],
      consumable_type
    }
    const [items, total] = await Promise.all([
      this.repository.findMany({ where, skip, take }),
      this.repository.count({ where })
    ])
    return { 
      consumable_model: items, 
      totalPages: Math.ceil(total / take) 
    }
  }

  createWithDeviceModelIds = async (body: CreateInputData<typeof MODEL> & { device_model_ids: number[] }) => {
    const { device_model_ids, ...consumableData } = body
    
    // 트랜잭션으로 처리
    const result = await prisma.$transaction(async (tx: any) => {
      // 1. 소모품 모델 생성
      const consumableModel = await tx.consumable_model.create({
        data: consumableData
      })

      log(consumableModel)
      // 2. 호환성 정보 생성
      await tx.device_consumable_compatibility.createMany({
        data: device_model_ids.map(device_model_id => ({
          device_model_id,
          consumable_model_id: consumableModel.consumable_model_id
        }))
      })
      return consumableModel
    })
  
    return { [MODEL]: result }
  }
}

