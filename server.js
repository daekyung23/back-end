const express = require('express');
const cors = require('cors');
const app = express();
const employeeRouters = require('./routers/employeeRouter');
const departmentRouters = require('./routers/departmentRouters');
const employeePositionRouters = require('./routers/employeePositionRouters');

const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/employee', employeeRouters);
app.use('/department', departmentRouters);
app.use('/employeePosition', employeePositionRouters);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});