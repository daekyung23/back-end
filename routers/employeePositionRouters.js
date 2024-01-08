const express = require('express');
const router = express.Router();
const employeePositionController = require('../controllers/employeePositionController');

router.get('/all', employeePositionController.getAllEmployeePositions); // 모든 부서 조회
router.get('/search/:searchTerms', employeePositionController.searchEmployeePositions); // 부서 검색
router.get('/:positionId', employeePositionController.getEmployeePositionById); //ID로 직급 조회


module.exports = router;