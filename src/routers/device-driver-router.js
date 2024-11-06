const express = require('express');
const router = express.Router();
const deviceDriverController = require('../controllers/device-driver-controller');

router.get('/search', deviceDriverController.searchDeviceDriver);
router.get('/check', deviceDriverController.checkDuplicateDeviceDriver);
router.post('/create', deviceDriverController.createDeviceDriver);
router.patch('/update', deviceDriverController.updateDeviceDriver);
router.delete('/delete', deviceDriverController.deleteDeviceDriver);

module.exports = router;