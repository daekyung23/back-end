const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-position-controller');

router.get('/all', controller.getAllUserPositions);
module.exports = router;
