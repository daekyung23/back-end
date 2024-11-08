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
const isDev = process.env.NODE_ENV !== "production"

const config: Config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
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



