const excelFileUploaderModel = require('../models/excelFileUploaderModel');
const topologicalSort = require('../utils/topologicalSort');
const XLSX = require('xlsx');
const connection = require('../database');  // 데이터베이스 연결

async function uploadExcelFile(req, res) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const filePath = req.file.path;  // 업로드된 파일 경로
    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames; // 시트 이름 목록

    try {
        // 외래 키 정보 조회
        const [fkResults] = await connection.query(`
            SELECT TABLE_NAME, REFERENCED_TABLE_NAME
            FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
            WHERE REFERENCED_TABLE_SCHEMA = 'yourDatabaseName' AND REFERENCED_TABLE_NAME IS NOT NULL;
        `);
        const edges = fkResults.map(fk => [fk.REFERENCED_TABLE_NAME, fk.TABLE_NAME]);

        // 시트 이름과 데이터베이스 테이블 이름 일치 확인
        const sortedTableNames = topologicalSort(sheetNames, edges);
        await excelFileUploaderModel.uploadExcelData(filePath, sortedTableNames);
        res.send('File processed and data stored successfully.');
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).send('Error processing file.');
    }
}

module.exports = {
    uploadExcelFile,
};
