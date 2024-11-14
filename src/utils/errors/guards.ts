import { SafeParseReturnType } from 'zod'
import { Response } from 'express'
import { ValidationError } from './custom'

export const handleValidationError = (result: SafeParseReturnType<any, any>, res: Response): boolean => {
  if (result.success) return false
  
  res.status(400).json(new ValidationError(result.error.errors))
  return true
}