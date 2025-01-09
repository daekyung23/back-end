import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'
import { ModelName } from '@lib/prisma/types/model'
import { Readable } from 'stream'
import { CsvUploadOptions } from '../types'
import { parseCsvStream } from '../utils/parser'

// File 인터페이스 정의
interface File {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  buffer: Buffer
  size: number
  stream: Readable
  destination: string
  filename: string
  path: string
}

// Request에 file 속성 타입 추가
interface RequestWithFile extends Request {
  file?: File
}

export const upload = <M extends ModelName>(
  modelName: M,
  options?: CsvUploadOptions<M>
) => {
  return async (req: RequestWithFile, res: Response, next: NextFunction) => {
    const prisma = new PrismaClient()
    
    try {
      const file = req.file
      if (!file) throw new Error('No file uploaded')

      const model = prisma[modelName] as any

      const results = await parseCsvStream<M>(
        Readable.from(file.buffer),
        prisma,
        {
          transformRow: options?.transformRow,
          onRow: async (data) => {
            await model.create({ data })
          }
        }
      )

      if (options?.onComplete) {
        await options.onComplete(results)
      }

      res.json({ 
        success: true, 
        count: results.length 
      })

    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }
}