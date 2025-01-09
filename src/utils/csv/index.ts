import { download } from './download'
import { upload } from './upload'
import { CsvDownloadOptions, CsvUploadOptions } from './types'
import { ModelName } from '@lib/prisma/types/model'

// 타입 export
export type {
  CsvDownloadOptions,
  CsvUploadOptions
} from './types'

// 상수 export
export { CSV } from './constants'

// 유틸리티 함수 export
export {
  formatCsvValue,
  formatCsvRow
} from './utils/formatter'

export {
  createCsvWriter,
  parseCsvStream,
  type CsvWriterOptions,
  type CsvParserOptions
} from './utils/parser'

// 미들웨어 팩토리 함수
export const csv = {
  /**
   * CSV 다운로드 미들웨어
   * @example
   * router.get('/download', csv.download('ModelName', {
   *   filename: 'export.csv',
   *   where: (req) => ({ ... })
   * }))
   */
  download: <M extends ModelName>(
    modelName: M,
    options?: CsvDownloadOptions<M>
  ) => download(modelName, options),

  /**
   * CSV 업로드 미들웨어
   * @example
   * router.post('/upload', csv.upload('ModelName', {
   *   transformRow: (row) => ({ ... }),
   *   onComplete: (results) => void
   * }))
   */
  upload: <M extends ModelName>(
    modelName: M,
    options?: CsvUploadOptions<M>
  ) => upload(modelName, options)
}

// 기본 export
export default csv