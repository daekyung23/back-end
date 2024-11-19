import dotenv from 'dotenv'

// 환경변수 로드
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

// 설정값 검증 함수
const env = (key) => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

// 스크립트용 설정
const dbConfig = {
  host: env('DB_HOST'),
  port: parseInt(env('DB_PORT')),
  user: env('DB_USER'),
  password: env('DB_PASSWORD'),
  database: env('DB_NAME')
}

// DATABASE_URL 생성
const databaseUrl = `mysql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`

// 스크립트용 설정
export const config = {
  db: {
    ...dbConfig,
    url: databaseUrl
  }
}

export const getPrismaDatabaseUrl = () => databaseUrl

export default config