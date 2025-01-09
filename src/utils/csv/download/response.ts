import { Response } from 'express'
import { CSV } from '../constants'
import { formatCsvRow } from '../utils/formatter'

export const createCsvResponse = async (
  res: Response,
  data: any[],
  headers: string[],
  filename: string
) => {
  // 응답 헤더 설정
  res.setHeader('Content-Type', CSV.MIME_TYPE)
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  
  // BOM 추가
  res.write(CSV.BOM)
  
  // 헤더 행 작성
  res.write(headers.join(',') + '\n')
  
  if (!data.length) {
    res.end()
    return
  }

  // 데이터 행 작성
  for (const record of data) {
    const cleanedRecord = formatCsvRow(record, headers)
    const values = headers.map(header => {
      const value = cleanedRecord[header]
      // CSV 값 이스케이프 처리
      if (value === null) return CSV.NULL
      if (value === '') return CSV.EMPTY
      if (typeof value === 'string' && value.includes(',')) {
        return `"${value.replace(/"/g, '""')}"`
      }
      return value
    })
    res.write(values.join(',') + '\n')
  }

  res.end()
}