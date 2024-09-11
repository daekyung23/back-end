const express = require('express');
const router = express.Router();
const checkInfoController = require('../controllers/checkInfoController');

router.get('/byId/:deviceId', checkInfoController.getCheckInfoByDeviceId);
router.get('/all', checkInfoController.getAllCheckInfos);
module.exports = router;