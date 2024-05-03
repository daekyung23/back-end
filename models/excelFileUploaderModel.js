const connection = require('../database');
const XLSX = require('xlsx');

async function uploadExcelData(filePath, sortedTableNames) {
    await connection.beginTransaction(); // 트랜잭션 시작
    try {
        const workbook = XLSX.readFile(filePath);
        for (let tableName of sortedTableNames) {
            if (workbook.Sheets[tableName]) {
                const data = XLSX.utils.sheet_to_json(workbook.Sheets[tableName]);
                for (let item of data) {
                    const columns = Object.keys(item);
                    const placeholders = columns.map(() => '?').join(',');
                    const sql = `INSERT INTO ${tableName} (${columns.join(',')}) VALUES (${placeholders})`;
                    await connection.execute(sql, Object.values(item));
                }
            }
        }
        await connection.commit(); // 트랜잭션 커밋
    } catch (error) {
        await connection.rollback(); // 오류 발생 시 롤백
        throw error;
    } finally {
        if (connection) {
            await connection.end(); // 연결 종료
        }
    }
}

module.exports = {
    uploadExcelData,
};
