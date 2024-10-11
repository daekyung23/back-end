const express = require('express');
const router = express.Router();
const consumableModelController = require('../controllers/consumable-model-controller');

router.get('/search', consumableModelController.searchConsumableModel);
router.post('/create', consumableModelController.createConsumableModel);
router.patch('/update', consumableModelController.updateConsumableModel);
router.delete('/delete', consumableModelController.deleteConsumableModel);

module.exports = router;