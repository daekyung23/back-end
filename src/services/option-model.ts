import type { Simplify } from 'type-fest'
import { Service } from '@base/service'
import { Repository } from '@base/repository'
import { prisma } from '@lib/prisma'  
import type { SearchQuery, SearchResult } from '@base/types'
import type { CreateInputData, FindManyInput, DeleteInput } from '@lib/prisma'

const MODEL = 'option_model' as const
const VIEW = 'v_option_model' as const
export class OptionModelService extends Service<typeof MODEL, typeof VIEW> {
  repository = new Repository<typeof MODEL, typeof VIEW>(prisma.option_model, prisma.v_option_model)
  modelRepository = new Repository<typeof MODEL>(prisma.option_model)

  // Defined At Controller & Service -------------------------------------------
  createWithDeviceModelIds = async (body: CreateInputData<typeof MODEL> & { device_model_ids: number[] }) => {
    const { device_model_ids, ...optionData } = body
    // 트랜잭션으로 처리
    const result = await prisma.$transaction(async (tx: any) => {
      // 1. 옵션 모델 생성
      const optionModel = await tx.option_model.create({
        data: optionData
      })
      // 2. 호환성 정보 생성
      await tx.device_option_compatibility.createMany({
        data: device_model_ids.map(device_model_id => ({
          device_model_id,
          option_model_id: optionModel.option_model_id
        }))
      })
      return optionModel
    })
  
    return { [MODEL]: result }
  }

  getCompatibilityByOptionModelId = async (where: FindManyInput<typeof MODEL>) => {
    return this.repository.findMany({ where })
  }

  // Override At Service -------------------------------------------------------
  override search = async (query: Simplify<SearchQuery<typeof VIEW>>): 
    Promise<SearchResult<typeof MODEL, typeof VIEW>> => {
    const { search_term, page, option_type } = query 
    const take = 10
    const skip = (page - 1) * take
    const where = {
      OR: [
        { manufacturer: { contains: search_term } },
        { option_name: { contains: search_term } },
      ],
      option_type
    }
    const [items, total] = await Promise.all([
      this.modelRepository.findMany({ where, skip, take }),
      this.modelRepository.count({ where })
    ])
    return { 
      option_model: items, 
      totalPages: Math.ceil(total / take) 
    }
  }


  delete = async <U extends keyof DeleteInput<typeof MODEL>>(
    where: DeleteInput<typeof MODEL>[U]
  ) => {
    return prisma.$transaction(async (tx) => {
      // 1. 호환성 데이터 삭제
      await tx.device_option_compatibility.deleteMany({ where: where as any })
      // 2. 옵션 모델 삭제
      return tx.option_model.delete({ where: where as any })
    })
  }
  
}

