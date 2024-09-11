const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

router.get('/all', departmentController.getAllDepartments); // 모든 부서 조회
router.get('/search/:searchTerms', departmentController.searchDepartments); // 부서 검색
router.get('/:departmentId', departmentController.getDepartmentById); // 부서 ID로 검색


module.exports = router;