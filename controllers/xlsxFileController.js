const xlsxFileModel = require('../models/xlsxFileModel');
const path = require('path'); // 경로 관련 모듈 가져오기

exports.uploadExcel = async (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
    }
    try {
        await xlsxFileModel.uploadExcel(req.file);
        res.send({ message: 'File processed successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.downloadExcel = async (req, res) => {
    try {
        const dbName = 'mydb'; // 데이터베이스 이름을 변수로 설정
        const filePath = await xlsxFileModel.downloadExcel(dbName);
        const absolutePath = path.resolve(filePath); // 절대 경로로 변환

        // 파일 다운로드를 위한 헤더 설정
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="${dbName}.xlsx"`); // 파일 이름 설정
        
        // 파일 스트림을 이용하여 클라이언트에 파일 전송
        res.sendFile(absolutePath, (err) => {
            if (err) {
                console.log("Error sending file:", err);
                res.status(500).send("Could not send the file.");
            } else {
                console.log("File sent successfully.");
            }
        });
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ error: 'Error generating Excel file' });
    }
};