//database.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'mydb',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10, // 최대 연결 개수 설정
  queueLimit: 0
});
  
module.exports = pool;