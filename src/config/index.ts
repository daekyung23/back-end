import { config as dotenvConfig } from 'dotenv'

// 환경 설정 파일 로드
const envFile = process.env.NODE_ENV === 'production' 
  ? '.env.production' 
  : '.env.development';

dotenvConfig({ path: envFile });

// 로깅 설정 인터페이스
interface LogConfig {
  enabled: boolean
  request: boolean
  requestBody: boolean
  response: boolean
  responseBody: boolean
}

// DB 설정 인터페이스
interface DBConfig {
  host: string
  port: number
  user: string
  password: string
  database: string
}

// 전체 설정 인터페이스
interface Config {
  nodeEnv: string
  port: string
  logging: LogConfig
  db: DBConfig
}
// 설정값 검증 함수
const env = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

// 설정 객체 생성
const config: Config = {
  nodeEnv: env('NODE_ENV'),
  port: env('PORT'),
  logging: {
    enabled: env('ENABLE_LOGGING') === 'true',
    request: env('ENABLE_REQUEST_LOGGING') === 'true',
    requestBody: env('ENABLE_REQUEST_BODY_LOGGING') === 'true',
    response: env('ENABLE_RESPONSE_LOGGING') === 'true',
    responseBody: env('ENABLE_RESPONSE_BODY_LOGGING') === 'true',
  },
  db: {
    host: env('DB_HOST'),
    port: parseInt(env('DB_PORT')),
    user: env('DB_USER'),
    password: env('DB_PASSWORD'),
    database: env('DB_NAME'),
  },
}

// DATABASE_URL 생성 함수
export const getPrismaDatabaseUrl = (): string => {
  const { host, port, user, password, database } = config.db
  return `mysql://${user}:${password}@${host}:${port}/${database}`
}

export default config