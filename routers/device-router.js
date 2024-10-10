const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device-controller');

router.get('/search', deviceController.searchDevice);
router.post('/create', deviceController.createDevice);
router.patch('/update', deviceController.updateDevice);
router.patch('/change-status', deviceController.changeDeviceStatus);

module.exports = router;
