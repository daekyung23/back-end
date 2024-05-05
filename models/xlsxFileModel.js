const connection = require('../database');

const xlsx = require('xlsx');
const async = require('async');

exports.processExcel = async (file) => {
    console.log("Transaction start");
    await connection.beginTransaction();

    try {
        console.log("Reading Excel file");
        const workbook = readExcelFile(file.path);
        // 시트 이름을 소문자로 매핑하는 객체 생성
        const sheetNameMap = workbook.SheetNames.reduce((acc, name) => {
            acc[name.toLowerCase()] = name;
            return acc;
        }, {});
        const sheets = workbook.SheetNames.map(name => name.toLowerCase());
        console.log("Fetching table names and dependencies");
        const dbTables = await fetchTableNamesAndDependencies();
        console.log("Validating sheet names");
        if (!validateSheetNames(sheets, Object.keys(dbTables))) {
            throw new Error('Sheet name does not match table name');
        }

        console.log("Performing topological sort");
        const sortedTables = await topologicalSort(dbTables);
        console.log("Sorted tables:", sortedTables);

        for (const tableName of sortedTables) {
            if (sheets.includes(tableName)) {
                console.log(`Processing sheet: ${tableName}`);
                const sheetData = parseSheet(workbook.Sheets[sheetNameMap[tableName]]);
                console.log("sheetData:", sheetData)
                if (sheetData.length === 0) {
                    console.log(`No data to process in ${tableName}. Skipping.`);
                    continue;
                }
                console.log(`Inserting data into ${tableName}`);
                await insertDataIntoTable(tableName, sheetData);
            } else {
                console.log(`No matching sheet for table: ${tableName}. Skipping.`);
            }
        }

        console.log("Committing transaction");
        await connection.commit();
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
    // 데이터가 있는 범위를 명시적으로 지정하거나, 다른 옵션을 사용해 보세요.
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
        const columns = Object.keys(data[0]).join(", ");
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

    return stack.reverse(); // 위상 정렬은 스택의 역순으로 결과를 반환
}


// function topologicalSort(dependencies, callback) {
//     console.log("starttopologicalSort");
//     let sorted = [], visited = {};
//     async.eachOf(dependencies, (deps, node, cb) => {
//         if (!visited[node]) {
//             visit(node, [], visited, dependencies, sorted, (err) => {
//                 if (err) {
//                     console.log(err.message); // 에러 메시지 출력
//                     callback(err); // 에러가 발생한 경우 콜백 함수로 전달
//                 } else {
//                     cb(); // visit 함수 완료 시 콜백 호출
//                 }
//             });
//         } else {
//             cb();
//         }
//     }, err => {
//         if (err) {
//             console.log(err.message); // 에러 메시지 출력
//             callback(err); // 에러가 발생한 경우 콜백 함수로 전달
//         } else {
//             console.log("sorted:", sorted); // 정렬된 결과 출력
//             callback(null, sorted); // 정렬된 결과를 콜백 함수로 전달
//         }
//     });
// }

// function visit(node, ancestors, visited, dependencies, sorted, callback) {
//     if (visited[node]) {
//         if (typeof callback === 'function') {
//             return callback();
//         } else {
//             console.error('Callback is not a function at visited check');
//             return; // 콜백이 함수가 아닐 경우 안전하게 반환
//         }
//     }
//     ancestors.push(node);
//     visited[node] = true;

//     async.each(dependencies[node] || [], (dep, cb) => {
//         if (ancestors.includes(dep)) {
//             console.error('Detected cycle in dependencies');
//             cb(new Error('Detected cycle in dependencies'));
//         } else {
//             if (dependencies[dep]) {
//                 visit(dep, ancestors.slice(), visited, dependencies, sorted, cb);
//             } else {
//                 cb();
//             }
//         }
//     }, err => {
//         if (err) {
//             if (typeof callback === 'function') {
//                 callback(err);
//             } else {
//                 console.error('Callback is not a function at error handling');
//             }
//         } else {
//             sorted.unshift(node);
//             if (typeof callback === 'function') {
//                 callback();
//             } else {
//                 console.error('Callback is not a function at success case');
//             }
//         }
//     });
// }
