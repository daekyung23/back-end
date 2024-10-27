const express = require('express');
const router = express.Router();
const clientBranchController = require('../controllers/client-branch-controller');

router.get('/search', clientBranchController.searchClientBranch);
router.post('/create', clientBranchController.createClientBranch);
router.patch('/update', clientBranchController.updateClientBranch);
router.patch('/change-activation', clientBranchController.changeClientBranchActivation);
router.delete('/delete', clientBranchController.deleteClientBranch);
router.get('/by-client', clientBranchController.getBranchesByClientId);

module.exports = router;