// server.js
const express = require('express');
const cors = require('cors');
const pool = require('./utils/database');
const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());

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
