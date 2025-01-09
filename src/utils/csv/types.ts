import { ModelName, CreateInputData, FindManyWhere } from '@lib/prisma/types/model'
import { Request } from 'express'

// 다운로드 옵션
export interface CsvDownloadOptions<M extends ModelName> {
  filename?: string
  where?: (req: Request) => FindManyWhere<M>
}

// 업로드 옵션
export interface CsvUploadOptions<M extends ModelName> {
  transformRow?: (row: any) => CreateInputData<M> | Promise<CreateInputData<M>>
  onComplete?: (results: any[]) => Promise<void>
}