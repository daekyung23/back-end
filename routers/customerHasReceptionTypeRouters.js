const express = require('express');
const router = express.Router();
const customerHasReceptionTypeController = require('./customerHasReceptionTypeController');

router.get('/byId/:customerId', customerHasReceptionTypeController.getReceptionTypeByCustomerId);
router.put('/update/:customerId', customerHasReceptionTypeController.updateCustomerHasReceptionType);
router.get('/search', customerHasReceptionTypeController.searchCustomerHasReceptionType);

module.exports = router;
