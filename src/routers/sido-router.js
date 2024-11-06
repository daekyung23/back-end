const express = require('express');
const router = express.Router();
const sidoController = require('../controllers/sido-controller');

router.get('/', sidoController.getAllSido);

module.exports = router;
// Compare this snippet from routers/sigungu-router.js: