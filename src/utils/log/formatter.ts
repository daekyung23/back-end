import chalk from 'chalk'

interface ResponseBody {
  [key: string]: any
}

/**
 * 응답 본문에서 유효한 필드의 갯수를 계산
 */
export const getValidFieldCount = (body: ResponseBody): number => {
  if (!body || typeof body !== 'object') return 0

  if (Array.isArray(body)) {
    return body.reduce((count, item) => {
      if (item && typeof item === 'object') {
        return count + Object.values(item)
          .filter(val => val !== null && val !== undefined).length
      }
      return count
    }, 0)
  }

  return Object.values(body)
    .filter(val => val !== null && val !== undefined).length
}

/**
 * 에러 스택을 포맷팅
 */
export const formatErrorStack = (stack: string): string => {
  const stackLines = stack.split('\n')
  if (stackLines.length === 0) return ''

  const firstLine = chalk.red(stackLines[1])
  const remainingLines = chalk.gray(
    stackLines.slice(2).map(line => line.trim()).join('\n')
  )

  return `${firstLine}\n${remainingLines}`
}

/**
 * 응답 본문을 포맷팅
 */
export const formatResponseBody = (body: any, contentType: string): string => {
  if (!body) return '(empty)'

  try {
    if (typeof body === 'string' && contentType.includes('application/json')) {
      return JSON.stringify(JSON.parse(body), null, 2)
    }
    if (typeof body === 'object') {
      return JSON.stringify(body, null, 2)
    }
    return body.toString()
  } catch (err) {
    return '[Unable to stringify body]'
  }
}