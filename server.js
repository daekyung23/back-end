const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const employeeRouters = require('./routers/employeeRouter');
const departmentRouters = require('./routers/departmentRouters');
const employeePositionRouters = require('./routers/employeePositionRouters');
const customerRouters = require('./routers/customerRouters');

const port = 3001;

app.use(cors());
app.use(express.json()); // JSON 요청 바디 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 바디 파싱


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/employee', employeeRouters);
app.use('/department', departmentRouters);
app.use('/employeePosition', employeePositionRouters);
app.use('/customer', customerRouters);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});