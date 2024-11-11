const express = require('express');
const router = express.Router();
const sigunguController = require('../controllers/sigungu-controller');

router.get('/', sigunguController.getSigunguBySidoId);
router.get('/:sigungu_id', sigunguController.getSigunguById);

module.exports = router;
