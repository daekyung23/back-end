const { filter } = require('async');
const connection = require('../database');
const util = require('util');

const query = util.promisify(connection.query).bind(connection);
const beginTransaction = util.promisify(connection.beginTransaction).bind(connection);
const commit = util.promisify(connection.commit).bind(connection);
const rollback = util.promisify(connection.rollback).bind(connection);

function selectAllDevice() {
    return `
        SELECT 
            -- 기본 장치 정보
            d.Device_ID AS Device_ID,
            d.Registration_Date AS Registration_Date,
            d.Owner_Dept_ID AS Owner_Dept_ID,
            d.Manage_Dept_ID AS Manage_Dept_ID,
            dm.Manufacturer AS Manufacturer,
            dm.Model_Name AS Model_Name,
            d.Serial_Num AS Serial_Num,
            d.Mac AS Mac,

            -- 위치 정보
            CASE
                WHEN l.Location_Type = 'Customer_Location' THEN CONCAT(c.Customer_Name, '/', cl.Customer_Location_Name)
                WHEN l.Location_Type = 'Storage' THEN s.Storage_Location_Name
                ELSE NULL
            END AS Location_Name,
            CASE
                WHEN l.Location_Type = 'Customer_Location' THEN c.Customer_Name
                ELSE NULL
            END AS Customer_Name,

            -- 상태 정보
            d.Condition AS \`Condition\`,

            -- 옵션 정보
            CASE WHEN Fax_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Fax,
            CASE WHEN Desk_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Desk,
            CASE WHEN Shelf_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Shelf

        FROM Device d
        ${joinDetails()}
        `;
}

function joinDetails() {
    return `
        -- 장치 모델 정보 조인
        LEFT JOIN Device_Model dm ON d.Device_Model_ID = dm.Device_Model_ID

        -- 최신 장치 기록 조인
        LEFT JOIN Device_History dh ON d.Last_History_ID = dh.History_ID

        -- 위치 정보 조인
        LEFT JOIN Location l ON dh.Location_ID = l.Location_ID

        LEFT JOIN \`Storage\` s ON dh.Location_ID = s.Storage_ID
        LEFT JOIN customer_location cl ON dh.Location_ID = cl.Customer_Location_ID
        LEFT JOIN customer c ON cl.Customer_ID = c.Customer_ID

        -- 옵션 정보 조인
        LEFT JOIN Option_in_Device Fax_Option ON d.Device_ID = Fax_Option.Device_ID
        LEFT JOIN \`Option\` Fax ON Fax_Option.Option_ID = Fax.Option_ID AND Fax.Option_Type = 'Fax'
        LEFT JOIN Option_in_device Desk_Option ON d.Device_ID = Desk_Option.Device_ID
        LEFT JOIN \`Option\` Desk ON Desk_Option.Option_ID = Desk.Option_ID AND Desk.Option_Type = '데스크'
        LEFT JOIN Option_in_device Shelf_Option ON d.Device_ID = Shelf_Option.Device_ID
        LEFT JOIN \`Option\` Shelf ON Shelf_Option.Option_ID = Shelf.Option_ID AND Shelf.Option_Type = '3/4단'
    `;
}

Device = {
    // 기기 세부 정보 검색
    searchDevices: async (modelNameKeyword, serialNumKeyword, manufacturerKeyword, conditionKeyword, storageLocationKeyword, page, itemsPerPage, pagesPerPageSet, callback) => {

        page = parseInt(page, 10);
        itemsPerPage = parseInt(itemsPerPage, 10);
        pagesPerPageSet = parseInt(pagesPerPageSet, 10);
        
        // 페이지 번호에 따른 OFFSET 계산
        console.log(page, itemsPerPage, pagesPerPageSet);
        const offset = (page - 1) * itemsPerPage;

        let filterQuery = `
            WHERE 1=1
        `;

        const filterParams = [];

        if (modelNameKeyword) {
            filterQuery += ` AND dm.Model_Name LIKE ?`;
            filterParams.push(`%${modelNameKeyword}%`);
        }

        if (serialNumKeyword) {
            filterQuery += ` AND d.Serial_Num LIKE ?`;
            filterParams.push(`%${serialNumKeyword}%`);
        }

        if (manufacturerKeyword) {
            filterQuery += ` AND dm.Manufacturer LIKE ?`;
            filterParams.push(`%${manufacturerKeyword}%`);
        }

        if (conditionKeyword) {
            filterQuery += ` AND d.Condition LIKE ?`;
            filterParams.push(`%${conditionKeyword}%`);
        }

        if (storageLocationKeyword) {
            filterQuery += ` AND s.Storage_Location_Name LIKE ?`;
            filterParams.push(`%${storageLocationKeyword}%`);
        }

        filterQuery += `
            ORDER BY
                d.Device_ID,
                d.Registration_Date,
                d.Owner_Dept_ID,
                d.Manage_Dept_ID,
                dm.Manufacturer,
                dm.Model_Name,
                d.Serial_Num,
                d.Mac,
                Customer_Location_Name,
                Storage_Location_Name,
                d.Condition
        `;

        const searchQuery = selectAllDevice() + filterQuery +  `LIMIT ? OFFSET ?`;
        let searchParams = filterParams.slice();
        searchParams.push(itemsPerPage, offset);

        const pageSet = Math.ceil(page / pagesPerPageSet);
        const pageSetStartItem = (pageSet - 1) * (itemsPerPage * pagesPerPageSet) + 1;
        const nextPageSetStartItem = pageSetStartItem + (itemsPerPage * pagesPerPageSet);
    
        let countQuery = `
            SELECT COUNT(d.Device_ID) AS Device_Count
            FROM Device d
        `;
        countQuery += joinDetails() + filterQuery + `LIMIT ? OFFSET ?`
        let countParams = filterParams.slice();
        countParams.push(nextPageSetStartItem - pageSetStartItem, pageSetStartItem - 1);

        try {
            // 트랜잭션 시작
            await beginTransaction();
    
            // 검색 쿼리 실행
            const searchResults = await query(searchQuery, searchParams);
    
            // 카운트 쿼리 실행
            const countResult = await query(countQuery, countParams);
            const deviceCount = countResult[0].Device_Count;
    
            const isNextPageSet = deviceCount > itemsPerPage * pagesPerPageSet;
            const pagesetEnd = Math.ceil(deviceCount / itemsPerPage) - (isNextPageSet ? 1 : 0);
            const resultWithPagination = {
                pagesetEnd,
                isNextPageSet,
                searchResults
            };
    
            // 트랜잭션 커밋
            await commit();
            callback(null, resultWithPagination);
        } catch (error) {
            // 트랜잭션 롤백
            await rollback();
            callback(error, null);
        }
    },

    // 기기 ID로 기기 세부 정보 가져오기
    getDeviceById: (deviceId, callback) => {
        let query = selectAllDevice();
        query += ` WHERE d.Device_ID = ${deviceId}`;

        connection.query(query, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]);
            }
        });
    },

    getAllDeviceConditions: (callback) => {
        connection.query(
            `
            SELECT 
                TRIM(BOTH "'" FROM SUBSTRING_INDEX(SUBSTRING_INDEX((REPLACE(REPLACE(COLUMN_TYPE, 'enum(', ''), ')', '')), ',', n.n), ',', -1)) AS 'Condition'
            FROM 
                INFORMATION_SCHEMA.COLUMNS
            JOIN (
                SELECT 
                    a.N + b.N * 10 + 1 AS n
                FROM 
                    (SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS a
                CROSS JOIN 
                    (SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS b
                ORDER BY 
                    n
            ) AS n ON CHAR_LENGTH(COLUMN_TYPE) - CHAR_LENGTH(REPLACE(COLUMN_TYPE, ',', '')) >= n.n - 1
            WHERE 
                TABLE_NAME = 'device' AND COLUMN_NAME = 'Condition';
            `
        , (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
            }
        );
    },

    insertDevice: (deviceData, callback) => {
        const { deviceName, deviceType } = deviceData; 
      
        const query = `
          INSERT INTO devices (device_name, device_type)
          VALUES (?, ?)
        `;
      
        db.query(query, [deviceName, deviceType], (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },
};

module.exports = Device;