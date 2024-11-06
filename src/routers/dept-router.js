const express = require('express');
const router = express.Router();
const deptController = require('../controllers/dept-controller');

router.get('/search', deptController.searchDept);
router.get('/children', deptController.getChildrenById);
router.post('/create', deptController.createDept);
router.patch('/update', deptController.updateDept);
router.delete('/delete', deptController.deleteDept);
router.get('/all', deptController.getAllDepts);
router.get('/name-by-id', deptController.getDeptNameById);
router.get('/id-by-name', deptController.getDeptIdByName);


module.exports = router;