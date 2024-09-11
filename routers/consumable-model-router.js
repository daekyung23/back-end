const express = require('express');
const router = express.Router();
const consumableModelController = require('../controllers/consumable-model-controller');

router.get('/search', consumableModelController.searchConsumableModel);

module.exports = router;