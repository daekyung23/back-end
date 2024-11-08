import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'
import { ValidationError } from '@utils/errors/custom'

interface RequestPart {
  body?: AnyZodObject
  query?: AnyZodObject
  params?: AnyZodObject
}

const validatePart = (schema: AnyZodObject, data: any) => {
  const result = schema.safeParse(data)
  if (!result.success) throw new ValidationError(result.error.errors)
  return result.data
}

export const validateInput = (part: RequestPart) => 
  (req: Request, _: Response, next: NextFunction) => {
    if (part.body) validatePart(part.body, req.body)
    if (part.query) validatePart(part.query, req.query)
    if (part.params) validatePart(part.params, req.params)
    next()
  }