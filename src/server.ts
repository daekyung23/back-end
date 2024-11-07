import 'module-alias/register'
import 'dotenv/config'
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { AppDataSource } from '../config/data-source'
import { log } from './utils/log'
import requestLogger from './middlewares/request-logger'
import responseLogger from './middlewares/response-logger'
import errorHandler from './middlewares/error-handler'

const app = express()

// 미들웨어 설정
app.use(express.json())
app.use(cors())
app.use(requestLogger)
app.use(responseLogger)

// TypeORM 데이터소스 초기화
AppDataSource.initialize()
  .then(() => {
    log('Successfully connected to database via TypeORM')
    
    // 에러 처리 미들웨어
    app.use(errorHandler)

    // 서버 시작
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      log(`Server is running on port ${port}`)
    })
  })
  .catch((error) => {
    log(error)
    process.exit(1)
  })

export default app