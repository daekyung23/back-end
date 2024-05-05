const express = require('express');
const multer = require('multer');
const router = express.Router();
const xlsxFileController = require('../controllers/xlsxFileController');

// 파일 저장을 위한 multer 설정
const strg = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')  // 파일이 저장될 위치
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)  // 파일 이름 설정
    }
});
const upload = multer({ storage: strg });

// 파일 업로드 라우트
router.post('/upload', upload.single('file'), xlsxFileController.uploadExcel);

module.exports = router;
