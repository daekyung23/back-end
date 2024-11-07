import '../../config/module-alias' 
import { Request, Response, NextFunction } from 'express'
import { log } from '@utils/log'

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const ENABLE_REQUEST_LOGGING = 
    process.env.ENABLE_LOGGING === 'true' && 
    process.env.ENABLE_REQUEST_LOGGING === 'true'

  if (ENABLE_REQUEST_LOGGING) {
    log({
      method: req.method,
      originalUrl: req.originalUrl,
      params: req.params,
      query: req.query,
      body: req.body,
      headers: {
        Authorization: req.headers.authorization
      }
    })
  }
  next()
}

export default requestLogger 