import '@config/alias-paths.js';
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import config from '@config'
import { log } from '@utils/log'
import { prisma } from '@lib/prisma'
import requestLogger from '@middlewares/request-logger'
import responseLogger from '@middlewares/response-logger'
import errorHandler from '@middlewares/error-handler'
import routes from '@routes'
import { initBigIntJson } from '@config/bigint.config'

// 서버 시작 부분에 추가
console.log('Current DATABASE_URL:', process.env.DATABASE_URL);
console.log('Current NODE_ENV:', process.env.NODE_ENV);

initBigIntJson()
const app = express()

// 미들웨어 설정
app.use(express.json())
app.use(cors())
app.use(requestLogger)
app.use(responseLogger)

// 라우터 설정
app.use('/client', routes.client)
app.use('/client-branch', routes.clientBranch)
app.use('/consumable-model', routes.consumableModel)
app.use('/dept', routes.dept)
app.use('/device', routes.device)
app.use('/device-driver', routes.deviceDriver)
app.use('/device-model', routes.deviceModel)
app.use('/sido', routes.sido)
app.use('/sigungu', routes.sigungu)
app.use('/user', routes.user)
app.use('/user-position', routes.userPosition)
app.use('/warehouse', routes.warehouse)
app.use('/device-location-log', routes.deviceLocationLog)

// Prisma 연결 테스트 및 서버 시작
async function bootstrap() {
  try {
    // Prisma 연결 테스트
    await prisma.$connect()
    log('Successfully connected to database via Prisma')
    
    // 에러 처리 미들웨어
    app.use(errorHandler)

    // 서버 시작
    const port = config.port
    app.listen(port, () => {
      log(`Server is running on port ${port}`)
    })
  } catch (error) {
    log(error)
    process.exit(1)
  }
}

bootstrap()

export default app