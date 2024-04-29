const express = require('express');
const router = express.Router();
const deviceModelController = require('../controllers/deviceModelController');

// 기기 세부 정보 검색 및 페이지네이션을 위한 라우트
router.get('/all', deviceModelController.getAllDeviceModels);
router.get('/byManufacturer/:manufacturer', deviceModelController.getDeviceModelByManufacturer);

module.exports = router;