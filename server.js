// server.js
require('dotenv').config();
require('express-async-errors');

const express = require('express');
const pool = require('./utils/database');
const app = express();

const cors = require('cors');
const requestLogger = require('./middlewares/request-logger');
app.use(requestLogger);
const responseLogger = require('./middlewares/response-logger')
app.use(responseLogger);

// 
app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.use('/client-branch', require('./routers/client-branch-router'));
app.use('/client', require('./routers/client-router'));
app.use('/consumable-model', require('./routers/consumable-model-router'));
app.use('/dept', require('./routers/dept-router'));
app.use('/device-driver', require('./routers/device-driver-router'));
app.use('/device-model', require('./routers/device-model-router'));
app.use('/device', require('./routers/device-router'));
app.use('/user', require('./routers/user-router'));
app.use('/user-position', require('./routers/user-position-router'));
app.use('/warehouse', require('./routers/warehouse-router'));
app.use('/sido', require('./routers/sido-router'));
app.use('/sigungu', require('./routers/sigungu-router'));

// 서버 시작 전 DB 연결 확인
(async () => {
  try {
    // 풀에서 연결을 얻어 테스트 쿼리를 수행하여 연결 상태를 확인합니다.
    const connection = await pool.getConnection();
    await connection.ping(); // 연결 테스트
    connection.release(); // 연결 반환
    console.log('Successfully connected to MySQL database.');
  } catch (err) {
    console.error('Failed to connect to MySQL database:', err);
    process.exit(1); // 연결 실패 시 서버 종료
  }
})();

// 에러 처리 미들웨어(서버 실행 직전 위치)
const errorHandler = require('./middlewares/error-handler');
app.use(errorHandler);


// 서버를 지정된 포트에서 시작
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
