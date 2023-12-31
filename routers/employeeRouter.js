const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/add', employeeController.registerNewEmployee); // 새로운 직원 등록
router.get('/all', employeeController.getAllEmployee); // 모든 직원 조회
router.get('/byId/:employeeId', employeeController.getEmployeeById); // 특정 직원 조회
router.get('/search', employeeController.searchEmployee); // 페이지를 추가한 검색
router.put('/update/:employeeId', employeeController.updateEmployee); // 사용자 업데이트
router.delete('/delete/:employeeId/:userPermission', employeeController.deleteEmployee); // 사용자 삭제

module.exports = router;