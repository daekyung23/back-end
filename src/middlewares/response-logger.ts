import '../../config/module-alias' 
import { Request, Response, NextFunction } from 'express'
import { logResponse } from '@utils/log'

const responseLogger = (req: Request, res: Response, next: NextFunction): void => {
  const ENABLE_RESPONSE_LOGGING = 
    process.env.ENABLE_LOGGING === 'true' && 
    process.env.ENABLE_RESPONSE_LOGGING === 'true'

  if (ENABLE_RESPONSE_LOGGING) {
    logResponse(res, 'detailed')
  }
  next()
}

export default responseLogger 