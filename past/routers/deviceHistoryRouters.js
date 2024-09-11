const express = require('express');
const router = express.Router();
const deviceHistoryController = require('../controllers/deviceHistoryController');

router.get('/byId/:deviceId', deviceHistoryController.getDeviceHistoryById);

module.exports = router;