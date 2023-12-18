const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const employeeRouters = require('./routers/employeeRouter');
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/employee', employeeRouters);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
