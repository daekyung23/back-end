import { Request, Response, NextFunction } from 'express'
import { ZodType } from 'zod'
import { ValidationError } from '@utils/errors/custom'

// 검증된 데이터를 위한 타입 정의
declare global {
  namespace Express {
    interface Request {
      validated: {
        body?: Record<string, any>
        query?: Record<string, any>
        params?: Record<string, any>
      }
    }
  }
}

interface RequestPart {
  body?: ZodType<any>
  query?: ZodType<any>
  params?: ZodType<any>
}

const validatePart = (schema: ZodType<any>, data: any) => {
  const result = schema.safeParse(data)
  if (!result.success) throw new ValidationError(result.error.errors)
  return result.data
}

export const validateInput = (part: RequestPart) => 
  (req: Request, _: Response, next: NextFunction) => {
    req.validated = {}
    if (part.body) req.validated.body = validatePart(part.body, req.body)
    if (part.query) req.validated.query = validatePart(part.query, req.query)
    if (part.params) req.validated.params = validatePart(part.params, req.params)
    next()
  }