import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'
import { ModelName } from '@lib/prisma/types/model'
import { CsvDownloadOptions } from '../types'
import { createCsvResponse } from './response'
import { getNowString } from '@utils/formatter/date'

export const download = <M extends ModelName>(
  modelName: M,
  options?: CsvDownloadOptions<M>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const prisma = new PrismaClient()
    
    try {
      // 1. 데이터 조회 (where 조건만 적용)
      const where = options?.where?.(req) || {}
      const model = prisma[modelName] as any
      const data = await model.findMany({ where })

      // 파일명 자동 생성 (options.filename이 없을 경우)
      const defaultFilename = `${modelName}_${getNowString()}.csv`
      const filename = options?.filename || defaultFilename
      
      if (!data.length) {
        console.log(`No data found for ${modelName}`)
        return createCsvResponse(res, [], [], options?.filename || `${modelName}.csv`)
      }

      // 2. 모델의 모든 필드 가져오기
      const modelFields = Object.keys(data[0])
      console.log(`Found ${data.length} records with fields:`, modelFields)

      // 3. CSV 응답 생성
      await createCsvResponse(
        res,
        data,
        modelFields,
        options?.filename || `${modelName}.csv`
      )

    } catch (error) {
      console.error(`Error downloading CSV for ${modelName}:`, error)
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }
}