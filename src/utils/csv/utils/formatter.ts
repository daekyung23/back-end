import { CSV } from '../constants'

export const formatCsvValue = (value: any): string => {
  if (value === null) return CSV.NULL
  if (value === '') return CSV.EMPTY
  if (value instanceof Date) return value.toISOString()
  return String(value)
}

export const formatCsvRow = (record: any, headers: string[]): Record<string, string> => {
  const formatted: Record<string, string> = {}
  headers.forEach(key => {
    formatted[key] = formatCsvValue(record[key])
  })
  return formatted
}