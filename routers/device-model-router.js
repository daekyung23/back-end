const express = require('express');
const router = express.Router();
const deviceModelController = require('../controllers/device-model-controller');

router.get('/search', deviceModelController.searchDeviceModel);
router.get('/check', deviceModelController.checkDuplicateDeviceModel);
router.delete('/delete', deviceModelController.deleteDeviceModel);
router.get('/manufacturers', deviceModelController.getAllManufacturers);
router.get('/models', deviceModelController.getModelsByManufacturer);


module.exports = router;