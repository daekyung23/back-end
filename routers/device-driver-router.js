const express = require('express');
const router = express.Router();
const deviceDriverController = require('../controllers/device-driver-controller');

router.get('/search', deviceDriverController.searchDeviceDriver);

module.exports = router;