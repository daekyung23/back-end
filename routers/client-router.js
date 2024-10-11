const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client-controller');

router.get('/search', clientController.searchClient);
router.post('/create', clientController.createClient);
router.patch('/update', clientController.updateClient);
router.patch('/change-activation', clientController.changeClientActivation);
router.delete('/delete', clientController.deleteClient);

module.exports = router;
