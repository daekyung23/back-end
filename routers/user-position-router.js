const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-position-controller');

router.get('/all', controller.getAllUserPositions);
router.delete('/delete', controller.deleteUserPosition);

module.exports = router;
