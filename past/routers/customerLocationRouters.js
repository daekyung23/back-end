const express = require('express');
const router = express.Router();
const customerLocationController = require('../controllers/customerLocationController');

router.get('/:customerId/all', customerLocationController.getAllCustomerLocationById)
router.post('/add', customerLocationController.registerNewCustomerLocation);
router.put('/update', customerLocationController.updateCustomerLocation);
router.delete('/delete/:customerId/:locationId', customerLocationController.deleteCustomerLocation);

module.exports = router;