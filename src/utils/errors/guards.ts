import { SafeParseReturnType } from 'zod'
import { Response } from 'express'
import { HttpError } from './custom'

export const handleValidationError = (result: SafeParseReturnType<any, any>, res: Response): boolean => {
  if (result.success) return false
  
  res.status(400).json(new HttpError('유효성 검증 오류', 400, result.error.errors))
  return true
} 