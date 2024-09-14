// server.js
const express = require('express');
const cors = require('cors');
const pool = require('./utils/database');
const port = 3001;
const app = express();

app.use(express.json()); // JSON 요청 본문을 처리하기 위한 미들웨어 추가

// 모든 출처에서의 요청을 허용
app.use(cors());
// 기존의 다른 미들웨어 및 라우터 설정들
app.use(express.json());

// 기본 경로에 대한 라우터 설정
const userRouter = require('./routers/user-router');
app.use('/user', userRouter);

const deptRouter = require('./routers/dept-router');
app.use('/dept', deptRouter);

const warehouseRouter = require('./routers/warehouse-router');
app.use('/warehouse', warehouseRouter);

const deviceModelRouter = require('./routers/device-model-router');
app.use('/device-model', deviceModelRouter);

const deviceDriverRouter = require('./routers/device-driver-router');
app.use('/device-driver', deviceDriverRouter);

const consumableModelRouter = require('./routers/consumable-model-router');
app.use('/consumabel-model', consumableModelRouter);

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

// 서버를 지정된 포트에서 시작
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
