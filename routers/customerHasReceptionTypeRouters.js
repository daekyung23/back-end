const express = require('express');
const router = express.Router();
const customerHasReceptionTypeController = require('../controllers/customerHasReceptionTypeController');

router.get('/parents', customerHasReceptionTypeController.getAllParentReceptionTypes);
router.get('/byId/:customerId', customerHasReceptionTypeController.getReceptionTypeByCustomerId);
router.get('/search', customerHasReceptionTypeController.searchCustomerHasReceptionType);
router.put('/update/:customerId', customerHasReceptionTypeController.updateCustomerHasReceptionType);

module.exports = router;
