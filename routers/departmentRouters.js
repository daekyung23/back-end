const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/departmentController');

router.get('/all', departmentController.getAllDepartments); // 모든 부서 조회

module.exports = router;