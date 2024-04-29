const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/add', customerController.registerNewCustomer);    //신규 고객사 등록
router.get('/all', customerController.getAllCustomers);         //모든 고객사 조회
router.get('/byId/:customerId', customerController.getCustomerById);    //고객사ID로 특정 고객사 조회
router.get('/byParentId/:parentCustomerId', customerController.getCustomerByParentCustomerId);  //상위 고객사 ID로 하위 고객사 전체 조회
router.get('/search', customerController.searchCustomer);       //고객사 이름으로 검색
router.put('/update/:customerId', customerController.updateCustomer);   //고객사 기존 정보 수정
router.delete('/delete/:customerId', customerController.deleteCustomer);    //고객사 기존 정보 삭제
router.get('/children', customerController.getCustomerChildren);         //모든 계열사 조회


module.exports = router;