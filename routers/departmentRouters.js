const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

router.get('/all', departmentController.getAllDepartments); // 모든 부서 조회

module.exports = router;