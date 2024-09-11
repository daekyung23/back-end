const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// 기기 세부 정보 검색 및 페이지네이션을 위한 라우트
router.get('/search', deviceController.searchDevices);
router.get('/byId/:deviceId', deviceController.getDeviceById);
router.get('/allCondition', deviceController.getAllDeviceConditions);

router.post('/register', deviceController.registerNewDevice);

module.exports = router;