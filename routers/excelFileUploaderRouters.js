const express = require('express');
const multer = require('multer');
const router = express.Router();
const excelFileUploaderController = require('../controllers/excelFileUploaderController');

// 파일 저장을 위한 multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')  // 파일이 저장될 위치
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)  // 파일 이름 설정
    }
});
const upload = multer({ storage: storage });

router.post('/uploadFile', upload.single('file'), excelFileUploaderController.uploadExcelFile);

module.exports = router;
