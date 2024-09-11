const express = require('express');
const router = express.Router();
const storageController = require('../controllers/storageController');

router.get('/all', storageController.getAllStorages);
module.exports = router;