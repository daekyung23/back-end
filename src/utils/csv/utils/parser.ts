import { createObjectCsvWriter } from 'csv-writer'
import { Response } from 'express'
import { Readable } from 'stream'
import csv from 'csv-parser'
import { ModelName } from '@lib/prisma/types/model'
import { CSV } from '../constants'
import { PrismaClient } from '@prisma/client'

// Writer 관련
export interface CsvWriterOptions {
  path: Response | string
  headers: Array<{ id: string, title: string }>
}

export const createCsvWriter = (options: CsvWriterOptions) => {
  return createObjectCsvWriter({
    path: options.path as string, // Response 타입을 string으로 강제 변환
    header: options.headers
  })
}

// Parser 관련
export interface CsvParserOptions<M extends ModelName> {
  transformRow?: (row: any) => any
  onRow?: (data: any) => Promise<void>
}

export const parseCsvStream = <M extends ModelName>(
  stream: Readable,
  prisma: PrismaClient, // Prisma 인스턴스 주입
  options?: CsvParserOptions<M>
) => {
  return new Promise<any[]>((resolve, reject) => {
    const results: any[] = []

    stream
      .pipe(csv({
        strict: true,
        // encoding 옵션 제거
      }))
      .on('data', async (row) => {
        try {
          // 데이터 변환
          const data = options?.transformRow 
            ? await options.transformRow(row)
            : row

          // 행 처리
          if (options?.onRow) {
            await options.onRow(data)
          }
          
          results.push(data)
        } catch (error) {
          reject(error)
        }
      })
      .on('end', () => resolve(results))
      .on('error', reject)
  })
}