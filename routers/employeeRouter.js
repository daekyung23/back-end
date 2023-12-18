const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/all', employeeController.getAllemployee); // 모든 사용자 조회

module.exports = router;