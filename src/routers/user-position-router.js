const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-position-controller');

router.get('/all', controller.getAllUserPositions);
router.delete('/delete', controller.deleteUserPosition);
router.get('/byId', controller.getPositionById);
router.get('/byName', controller.getPositionByName);

module.exports = router;
