const express = require('express');
const router = express.Router();
const customerHasReceptionTypeController = require('../controllers/customerHasReceptionTypeController');

router.get('/byId/:customerId', customerHasReceptionTypeController.getReceptionTypeByCustomerId);
router.put('/updateCustomerHasReceptionType/:customerId', customerHasReceptionTypeController.updateCustomerHasReceptionType);
router.get('/search', customerHasReceptionTypeController.searchCustomerHasReceptionType);

module.exports = router;
