const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouse-controller');

router.get('/search', warehouseController.searchWarehouse);

module.exports = router;