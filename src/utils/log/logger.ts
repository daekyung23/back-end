import dotenv from 'dotenv'
import chalk from 'chalk'
import { HttpError } from '@utils/errors'
import { 
  getValidFieldCount, 
  formatErrorStack,
  formatResponseBody 
} from './formatter'

dotenv.config()

// 타입 정의
interface ResponseData {
  statusCode: number
  body: any
  contentType: string
}

interface RequestData {
  method: string
  originalUrl: string
  params?: Record<string, any>
  query?: Record<string, any>
  body?: Record<string, any>
  headers?: Record<string, any>
}

type LogMode = 'default' | 'detailed'

// 타입 가드
const isResponseData = (data: any): data is ResponseData => 
  data && typeof data.statusCode === 'number'

const isRequestData = (data: any): data is RequestData => 
  data && data.method && data.originalUrl

// 로깅 함수들
const logError = (error: Error, timestamp: string) => {
  const errorMessage = error.message
  const formattedStack = formatErrorStack(error.stack || '')
  const statusCode = error instanceof HttpError ? 
    chalk.red(` (Code: ${(error as HttpError).statusCode})`) : ''

  if (process.env.NODE_ENV === 'development') {
    console.error(
      `${chalk.red('[에러]')}${statusCode}${chalk.red(`: ${errorMessage}`)}${chalk.gray(` - ${timestamp}`)}
${formattedStack}`
    )
  } else {
    console.error(`${chalk.red('[에러]')} - ${chalk.gray(`${timestamp}: ${errorMessage}`)}`)
  }

  if ('errors' in error) {
    console.error((error as any).errors)
  }
}

const logResponseData = (data: ResponseData, mode: LogMode, timestamp: string) => {
  const { statusCode, body, contentType } = data
  
  if (statusCode >= 400 && statusCode < 600) {
    const formattedBody = formatResponseBody(body, contentType)
    const logMessage = process.env.NODE_ENV === 'development' 
      ? `${chalk.red('[응답 에러]')} ${chalk.red(statusCode)}
${chalk.gray('[내용]')} ${formattedBody} - ${chalk.gray(timestamp)}`
      : `${chalk.red('[응답 에러]')} ${chalk.red(statusCode)} - ${chalk.gray(timestamp)}`

    console.error(logMessage)
    return
  }

  if (mode === 'detailed') {
    const formattedBody = formatResponseBody(body, contentType)
    console.log(
      `${chalk.green('[응답]')} ${chalk.green(statusCode)}
${chalk.gray('[내용]')} ${formattedBody} - ${chalk.gray(timestamp)}`
    )
  } else {
    console.log(body)
    const fieldCount = body ? Object.keys(body).length : 0
    const validFieldCount = getValidFieldCount(body)
    console.log(
      `${chalk.green('[응답]')} ${chalk.green(statusCode)} - ` +
      `필드 갯수: ${chalk.blue(fieldCount)}, ` +
      `유효 필드 갯수: ${chalk.blue(validFieldCount)} - ${chalk.gray(timestamp)}`
    )
  }
}

const logRequest = (data: RequestData, timestamp: string) => {
  let logMessage = `${chalk.blue('[요청]')} ${data.method} ${data.originalUrl}`

  if (data.params && Object.keys(data.params).length > 0) {
    logMessage += `\n${chalk.blue('[파라미터]')} ${JSON.stringify(data.params, null, 2)}`
  }
  if (data.query && Object.keys(data.query).length > 0) {
    logMessage += `\n${chalk.blue('[쿼리]')} ${JSON.stringify(data.query, null, 2)}`
  }
  if (data.body && Object.keys(data.body).length > 0) {
    logMessage += `\n${chalk.blue('[본문]')} ${JSON.stringify(data.body, null, 2)}`
  }
  if (data.headers?.Authorization) {
    logMessage += `\n${chalk.blue('[토큰]')} ${data.headers.Authorization}`
  }

  console.log(`${logMessage} - ${chalk.gray(timestamp)}`)
}

// 메인 로깅 함수
export const log = (
  data: Error | ResponseData | RequestData | string | any,
  mode: LogMode = 'default'
) => {
  const { NODE_ENV, ENABLE_LOGGING } = process.env
  const timestamp = new Date().toISOString()

  if (!ENABLE_LOGGING && NODE_ENV !== 'development') return

  if (data instanceof Error) logError(data, timestamp)
  else if (isResponseData(data)) logResponseData(data, mode, timestamp)
  else if (isRequestData(data)) logRequest(data, timestamp)
  else if (typeof data === 'string') {
    console.log(`${chalk.blue('[정보]')} - ${chalk.gray(`${timestamp}: ${data}`)}`)
  } else {
    console.log(`${chalk.blue('[정보]')} - ${chalk.gray(`${timestamp}: ${JSON.stringify(data, null, 2)}`)}`)
  }
}

// Express 미들웨어
export const logResponse = (res: any, mode: LogMode = 'default') => {
  if (!res?.send || !res?.json) {
    console.error(chalk.red('[로깅 에러] res 객체가 유효하지 않습니다.'))
    return
  }

  const originalSend = res.send.bind(res)
  const originalJson = res.json.bind(res)
  let responseBody: any

  res.send = function(body: any) {
    responseBody = body
    return originalSend(body)
  }

  res.json = function(body: any) {
    responseBody = body
    return originalJson(body)
  }

  res.on('finish', () => {
    log({
      statusCode: res.statusCode,
      body: responseBody,
      contentType: res.get('Content-Type') || ''
    }, mode)
  })
}