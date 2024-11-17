import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

interface DBConfig {
  host: string | undefined
  port: number
  user: string | undefined
  password: string | undefined
  database: string | undefined
}

interface Config {
  nodeEnv: string | undefined
  port: string | undefined
  db: DBConfig
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
}

export default config