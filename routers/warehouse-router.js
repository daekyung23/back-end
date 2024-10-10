const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouse-controller');

router.get('/search', warehouseController.searchWarehouse);
router.get('/check-duplicate', warehouseController.checkDuplicateWarehouse);
router.post('/create', warehouseController.createWarehouse);
router.patch('/update', warehouseController.updateWarehouse);

module.exports = router;