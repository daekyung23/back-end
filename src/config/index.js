require("dotenv").config()

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    port: process.env.NODE_ENV === "development" ? process.env.DB_PORT_DEV : process.env.DB_PORT_PROD,
    user: process.env.NODE_ENV === "development" ? process.env.DB_USER_DEV : process.env.DB_USER_PROD,
    password: process.env.NODE_ENV === "development" ? process.env.DB_PASSWORD_DEV : process.env.DB_PASSWORD_PROD,
    database: process.env.NODE_ENV === "development" ? process.env.DB_DATABASE_DEV : process.env.DB_DATABASE_PROD,
  },
  logging: {
    enableLogging: process.env.ENABLE_LOGGING,
    enableRequestLogging: process.env.ENABLE_REQUEST_LOGGING,
    enableRequestBodyLogging: process.env.ENABLE_REQUEST_BODY_LOGGING,
    enableResponseLogging: process.env.ENABLE_RESPONSE_LOGGING,
    enableResponseBodyLogging: process.env.ENABLE_RESPONSE_BODY_LOGGING,
  },
}
module.exports = config



