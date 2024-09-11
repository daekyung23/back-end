const express = require('express');
const router = express.Router();
const deptController = require('../controllers/dept-controller');

router.get('/search', deptController.searchDept);

module.exports = router;