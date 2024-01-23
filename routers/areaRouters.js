const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

router.get('/byId/:areaId', areaController.getAreaById);
router.get('/all', areaController.getAllAreas);
module.exports = router;