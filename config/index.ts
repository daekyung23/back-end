//src/config/index.ts
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

dotenv.config()

// tsconfig.json의 paths 타입 정의
interface TsConfig {
  compilerOptions: {
    paths: {
      [key: string]: string[]
    }
  }
}

// 설정 타입 정의
interface Config {
  nodeEnv: string | undefined
  port: string | undefined
  paths: {
    relative: {[key: string]: string}
    absolute: {[key: string]: string}
  }
  db: {
    host: string | undefined
    port: number
    user: string | undefined
    password: string | undefined
    database: string | undefined
  }
  typeorm: {
    type: "mysql"
    host: string | undefined
    port: number
    username: string | undefined
    password: string | undefined
    database: string | undefined
    synchronize: boolean
    logging: boolean
    entities: string[]
    migrations: string[]
    subscribers: string[]
    cli: {
      entitiesDir: string
      migrationsDir: string
      subscribersDir: string
    }
  }
}

// 프로젝트 루트 디렉토리에서 tsconfig.json 읽기
const tsconfigPath = path.join(process.cwd(), 'tsconfig.json')
const tsConfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8')) as TsConfig

// 디버깅을 위한 로그 추가
console.log('TSConfig paths:', tsConfig.compilerOptions.paths)

// paths 설정 변환
const paths = {
  relative: Object.fromEntries(
    Object.entries(tsConfig.compilerOptions.paths)
      .filter(([_, value]) => Array.isArray(value) && value.length > 0)  // 빈 배열 필터링
      .map(([key, [value]]) => {
        const newKey = key.replace('/*', '').replace('@', '')
        const newValue = value.replace('/*', '')
        console.log(`Path mapping: ${key} -> ${newKey} = ${value} -> ${newValue}`)
        return [newKey, newValue]
      })
  ),
  absolute: Object.fromEntries(
    Object.entries(tsConfig.compilerOptions.paths)
      .filter(([_, value]) => Array.isArray(value) && value.length > 0)  // 빈 배열 필터링
      .map(([key, [value]]) => {
        const newKey = key.replace('/*', '').replace('@', '')
        const newValue = path.join(process.cwd(), value.replace('/*', ''))
        console.log(`Absolute path mapping: ${key} -> ${newKey} = ${value} -> ${newValue}`)
        return [newKey, newValue]
      })
  )
}

// 결과 확인
console.log('Final paths:', JSON.stringify(paths, null, 2))

const isDev = process.env.NODE_ENV !== "production"

const config: Config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  paths,
  
  db: {
    host: isDev ? process.env.DB_HOST_DEV : process.env.DB_HOST_PROD,
    port: parseInt((isDev ? process.env.DB_PORT_DEV : process.env.DB_PORT_PROD) || '3306'),
    user: isDev ? process.env.DB_USER_DEV : process.env.DB_USER_PROD,
    password: isDev ? process.env.DB_PASSWORD_DEV : process.env.DB_PASSWORD_PROD,
    database: isDev ? process.env.DB_NAME_DEV : process.env.DB_NAME_PROD,
  },

  typeorm: {
    type: "mysql",
    host: isDev ? process.env.DB_HOST_DEV : process.env.DB_HOST_PROD,
    port: parseInt((isDev ? process.env.DB_PORT_DEV : process.env.DB_PORT_PROD) || '3306'),
    username: isDev ? process.env.DB_USER_DEV : process.env.DB_USER_PROD,
    password: isDev ? process.env.DB_PASSWORD_DEV : process.env.DB_PASSWORD_PROD,
    database: isDev ? process.env.DB_NAME_DEV : process.env.DB_NAME_PROD,
    synchronize: isDev,
    logging: isDev,
    entities: [`${paths.absolute.entities}/**/*.js`],
    migrations: [`${paths.absolute.migrations}/**/*.js`],
    subscribers: [`${paths.absolute.subscribers}/**/*.js`],
    cli: {
      entitiesDir: paths.absolute.entities,
      migrationsDir: paths.absolute.migrations,
      subscribersDir: paths.absolute.subscribers
    }
  }
}

export default config



