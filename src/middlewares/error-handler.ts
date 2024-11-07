import { Request, Response, NextFunction } from 'express'
import { HttpError } from '@utils/errors'
import { log } from '@utils/log'

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  log(err)
  const statusCode = err instanceof HttpError ? err.statusCode : 500
  res.status(statusCode).json({ error: err.message })
} 