const connection = require('../database');

const xlsx = require('xlsx');
const async = require('async');

exports.uploadExcel = async (file) => {
    console.log("Transaction start");
    await connection.beginTransaction();

    try {
        console.log("Reading Excel file");
        const workbook = readExcelFile(file.path);

        //  sheetTableMap : dictionary $ 엑셀에 적힌 테이블 이름과 시트 이름 매핑
        //      key: string $ A1셀에 적힌 테이블 이름
        //      value: string $ 엑셀 각 시트 이름
        const sheetTableMap = {};
        workbook.SheetNames.forEach((sheetName) => {
            const sheet = workbook.Sheets[sheetName];
            const tableName = sheet['A1'] ? sheet['A1'].v.toLowerCase() : null;
            if (tableName) {
                sheetTableMap[tableName] = sheetName;
            }
        });
        
        // dbTables : dictionary $ 스키마 내 테이블 의존성 정보
        //      key : string $ 상위 테이블
        //      value : string[] $ 하위 테이블
        console.log("Fetching table names and dependencies");
        const dbTables = await fetchTableNamesAndDependencies();
        console.log("Validating sheet names");

        // validateSheetNames : Boolean $ 엑셀에 적힌 이름과 스키마 내 테이블 이름 유효성 검사 
        if (!validateSheetNames(Object.keys(sheetTableMap), Object.keys(dbTables))) {
            throw new Error('Sheet name does not match table name');
        } //어떤 테이블이 존재하지 않는지 표시해주는 error 메시지 필요
        
        // sortedTables : string[] $ 의존성 하위 > 상위 순 테이블 배열
        console.log("Performing topological sort");
        const sortedTables = await topologicalSort(dbTables);
        console.log("Sorted tables:", sortedTables);

        // 모든 테이블에 데이터 입력
        for (const tableName of sortedTables) {
            if (sheetTableMap[tableName]) {

                const sheetName = sheetTableMap[tableName];
                console.log(`Processing sheet: ${sheetName}`);

                // 시트 두 번째 행에서 어트리뷰트 이름 추출
                const attributes = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 })[1] || [];
                console.log(`Attributes for ${tableName}:`, attributes);

                // 시트 세 번째 행부터 입력 데이터 추출
                const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], {
                    header: attributes, // 첫 번째 줄의 필드 이름을 헤더로 사용
                    range: 2, // 세 번째 줄부터 데이터를 추출
                    defval: null // 비어있는 셀을 null로 대체
                });
                console.log(`sheetData for ${tableName}:`, rows);

                if (rows.length === 0) {
                    console.log(`No data to process in ${tableName}. Skipping.`);
                    continue;
                }

                // dataTypes : dictionary
                //      key : tableName
                //      value : data type
                const dataTypes = await fetchTableDataType(tableName);
                console.log(dataTypes)
                // 타입이 Date일 경우 && 입력 데이터가 숫자인 경우, Date 형식으로 변환
                rows.forEach(row => {
                    Object.keys(row).forEach(column => {
                        if (dataTypes[column] === 'date' && typeof row[column] === 'number') {
                            row[column] = excelDateToMysqlDate(row[column]);
                        }
                    });
                });

                // 타입이 TIMESTAMP일 경우 && 입력 데이터가 숫자인 경우, TIMESTAMP 형식으로 변환
                rows.forEach(row => {
                    Object.keys(row).forEach(column => {
                        if (dataTypes[column] === 'timestamp' && typeof row[column] === 'number') {
                            row[column] = excelDateToMysqlDatetime(row[column]);
                        }
                    });
                });

                // 테이블에 데이터 입력
                console.log(`Inserting data into ${tableName}`);
                await insertDataIntoTable(tableName, rows);
            } else {
                console.log(`No matching sheet for table: ${tableName}. Skipping.`);
            }
        }

        console.log("Committing transaction");
        await connection.commit();
    } catch (error) {
        console.error("Error occurred, rolling back transaction", error);
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
        console.log("Connection released");
    }
};

exports.downloadExcel = async (dbName) => {
    console.log("Transaction start for downloading Excel");
    await connection.beginTransaction();

    try {
        console.log("Fetching table data for all tables");
        const tables = await fetchAllTables();
        const workbook = xlsx.utils.book_new();

        for (const tableName of tables) {
            const rows = await fetchTableData(tableName);
            const schema = await fetchTableSchema(tableName);

            const sheet = xlsx.utils.aoa_to_sheet([[tableName]]); // A1에 테이블 이름 삽입
            xlsx.utils.sheet_add_aoa(sheet, [schema], {origin: 'A2'}); // A2에 열 이름(스키마) 삽입

            if (rows.length > 0) {
                // 데이터를 열 순서에 맞게 재정렬
                const orderedRows = rows.map(row => 
                    schema.map(column => row[column] !== undefined ? row[column] : null)
                );

                // 데이터를 A3부터 삽입
                xlsx.utils.sheet_add_json(sheet, orderedRows, {origin: 'A3', skipHeader: true});
            }

            const safeSheetName = `Sheet_${tables.indexOf(tableName) + 1}`;
            xlsx.utils.book_append_sheet(workbook, sheet, safeSheetName);
        }

        const filePath = `./${dbName}.xlsx`;
        xlsx.writeFile(workbook, filePath);

        console.log("Committing transaction");
        await connection.commit();
        return filePath;
    } catch (error) {
        console.log("Error occurred, rolling back transaction", error);
        await connection.rollback();
        throw error;
    }
};

function readExcelFile(filePath) {
    const workbook = xlsx.readFile(filePath);
    return workbook;
}

async function fetchAllTables() {
    return new Promise((resolve, reject) => {
        connection.query(`
            SELECT TABLE_NAME
            FROM information_schema.tables
            WHERE table_schema = 'mydb'
        `, (error, results) => {
            if (error) {
                reject(error);
            } else {
                console.log(results);
                resolve(results.map(row => row.TABLE_NAME));
            }
        });
    });
}

async function fetchTableNamesAndDependencies() {
    return new Promise((resolve, reject) => {
        connection.query(`
            SELECT TABLE_NAME, REFERENCED_TABLE_NAME
            FROM information_schema.key_column_usage
            WHERE REFERENCED_TABLE_NAME IS NOT NULL
            AND table_schema = 'mydb'
        `, async (error, results) => {
            if (error) {
                reject(error);
            } else {
                const dependencies = {};
                const tableNames = await fetchAllTables();
                tableNames.forEach(tableName =>{
                    dependencies[tableName] = [];
                })
                results.forEach(row => {
                    const tableName = row.TABLE_NAME;
                    const referencedTableName = row.REFERENCED_TABLE_NAME;
                    if (!dependencies[tableName]) {
                        dependencies[tableName] = [];
                    }
                    dependencies[tableName].push(referencedTableName);
                });
                console.log(results);
                resolve(dependencies);
            }
        });
    });
}

function validateSheetNames(sheets, tableNames) {
    sheets.forEach(sheet => console.log("Sheet Name:", sheet));
    tableNames.forEach(tableName => console.log("Table Name:", tableName));
    return sheets.every(sheet => tableNames.includes(sheet));
}

function parseSheet(sheet) {
    console.log(sheet)
    const data = xlsx.utils.sheet_to_json(sheet, { raw: false, defval: "" });
    console.log(`Parsed data from sheet:`, data);
    return data;
}

function insertDataIntoTable(tableName, data) {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            console.log(`No data to insert for ${tableName}. Skipping insertion.`);
            return resolve("No data to insert");
        }

        // 첫 번째 데이터 객체에서 열 이름 추출
        const columns = Object.keys(data[0]).map(col => `\`${col}\``).join(", ");
        // 각 데이터 객체의 값에 대한 플레이스홀더 생성
        const placeholders = data.map(() => `(${Object.keys(data[0]).map(() => '?').join(', ')})`).join(', ');
        const sql = `INSERT INTO ${tableName} (${columns}) VALUES ${placeholders}`;

        // 모든 데이터 객체의 값 처리
        const values = data.reduce((acc, row) => {
            Object.values(row).forEach(value => {
                // 빈 문자열을 NULL로 변환
                acc.push(value === '' ? null : value);
            });
            return acc;
        }, []);

        connection.query(sql, values, (error, results) => {
            if (error) {
                console.error(`Error inserting data into ${tableName}:`, error);
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function topologicalSort(dependencies) {
    const graph = {};
    // Object.keys를 사용하여 각 키에 대해 반복
    Object.keys(dependencies).forEach(tableName => {
        dependencies[tableName].forEach(referencedTableName => {
            if (tableName !== referencedTableName) { // 자기 자신 참조를 무시
                if (!graph[tableName]) {
                    graph[tableName] = new Set();
                }
                graph[tableName].add(referencedTableName);
            }
        });
    });

    const visited = {};
    const stack = [];
    const tempMark = new Set();

    Object.keys(graph).forEach(node => {
        if (!visited[node]) {
            visit(node, visited, stack, graph, tempMark);
        }
    });

    function visit(node, visited, stack, graph, tempMark) {
        if (tempMark.has(node)) {
            throw new Error("Detected cycle in dependencies");
        }

        if (!visited[node]) {
            tempMark.add(node);
            const neighbors = Array.from(graph[node] || []);
            neighbors.forEach(neighbor => {
                visit(neighbor, visited, stack, graph, tempMark);
            });
            tempMark.delete(node);
            visited[node] = true;
            stack.push(node);
        }
    }

    return stack;
}

async function fetchAllTables() {
    return new Promise((resolve, reject) => {
        const query = `SELECT TABLE_NAME FROM information_schema.tables WHERE table_schema = 'mydb'`;
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                const tableNames = results.map(row => row.TABLE_NAME);
                resolve(tableNames);
            }
        });
    });
}

function fetchTableSchema(tableName) {
    return new Promise((resolve, reject) => {
        const query = `SELECT COLUMN_NAME FROM information_schema.columns WHERE table_schema = 'mydb' AND table_name = ? ORDER BY ORDINAL_POSITION`;
        connection.query(query, [tableName], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const columns = results.map(row => row.COLUMN_NAME);
                resolve(columns);
            }
        });
    });
}

function fetchTableDataType(tableName) {
    return new Promise((resolve, reject) => {
        const query = `SELECT COLUMN_NAME, DATA_TYPE FROM information_schema.columns WHERE table_schema = 'mydb' AND table_name = ? ORDER BY ORDINAL_POSITION`;
        connection.query(query, [tableName], (error, results) => {
            if (error) {
                reject(error);
            } else {
                const columnDataTypes = {};
                results.forEach(row => {
                    columnDataTypes[row.COLUMN_NAME] = row.DATA_TYPE;
                });
                resolve(columnDataTypes);
            }
        });
    });
}

function fetchTableData(tableName) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM \`${tableName}\``;
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

function excelDateToMysqlDate(excelDate) {
    const date = new Date((excelDate - 25569) * 86400 * 1000);
    return date.toISOString().split('T')[0];
}

function excelDateToMysqlDatetime(excelDate) {
    const date = new Date((excelDate - 25569) * 86400 * 1000);
    return date.toISOString().slice(0, 19).replace('T', ' ');
}