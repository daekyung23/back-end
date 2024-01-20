const express = require('express');
const router = express.Router();
const customerHasReceptionTypeController = require('./customerHasReceptionTypeController');

router.get('/allParentReceptionTypes', customerHasReceptionTypeController.getAllParentReceptionTypes);
router.get('/receptionTypeByCustomerId/:customerId', customerHasReceptionTypeController.getReceptionTypeByCustomerId);
router.get('/searchCustomerHasReceptionType', customerHasReceptionTypeController.searchCustomerHasReceptionType);
router.put('/updateCustomerHasReceptionType/:customerId', customerHasReceptionTypeController.updateCustomerHasReceptionType);

module.exports = router;