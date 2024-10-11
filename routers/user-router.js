const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/search', userController.searchUser);
router.get('/check', userController.checkDuplicateLoginId);
router.post('/create', userController.createUser);
router.patch('/update', userController.updateUser);
router.patch('/change-activation', userController.changeUserActivation);
router.delete('/delete', userController.deleteUser);

module.exports = router;
