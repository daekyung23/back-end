const express = require('express');
const router = express.Router();
const deviceModelController = require('../controllers/device-model-controller');

router.get('/search', deviceModelController.searchDeviceModel);
router.delete('/delete', deviceModelController.deleteDeviceModel);

module.exports = router;