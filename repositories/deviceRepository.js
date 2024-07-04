const connection = require('../database');

function deviceCountInPageSet(page, itemsPerPage, pagesPerPageSet) {
    const pageSet = Math.ceil(page / pagesPerPageSet);
    const pageSetStartItem = (pageSet - 1) * (itemsPerPage * pagesPerPageSet) + 1;
    const nextPageSetStartItem = pageSetStartItem + (itemsPerPage * pagesPerPageSet);
    const params = [nextPageSetStartItem - pageSetStartItem, pageSetStartItem - 1];

    const query =  `
        SELECT COUNT(Device_ID) AS Device_Count
        FROM Device d
        LIMIT ? OFFSET ?
    `;

    connection.query(query, params, (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results[0].Device_Count);
        }
    });
}

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
    searchDevices: (modelNameKeyword, serialNumKeyword, manufacturerKeyword, conditionKeyword, storageLocationKeyword, page, itemsPerPage, pagesPerPageSet, callback) => {
        // 페이지 번호에 따른 OFFSET 계산
        const parsedItemsPerPage  = parseInt(itemsPerPage);
        const offset = (page - 1) * parsedItemsPerPage;
        
        let query = selectAllDevice();
        query += `
            WHERE 1=1
        `;

        const params = [];

        if (modelNameKeyword) {
            query += ` AND dm.Model_Name LIKE ?`;
            params.push(`%${modelNameKeyword}%`);
        }

        if (serialNumKeyword) {
            query += ` AND d.Serial_Num LIKE ?`;
            params.push(`%${serialNumKeyword}%`);
        }

        if (manufacturerKeyword) {
            query += ` AND dm.Manufacturer LIKE ?`;
            params.push(`%${manufacturerKeyword}%`);
        }

        if (conditionKeyword) {
            query += ` AND d.Condition LIKE ?`;
            params.push(`%${conditionKeyword}%`);
        }

        if (storageLocationKeyword) {
            query += ` AND s.Storage_Location_Name LIKE ?`;
            params.push(`%${storageLocationKeyword}%`);
        }

        query += `
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
                d.Condition,
                Fax,
                Desk,
                Shelf
        `;

        query += `
            LIMIT ? OFFSET ?
        `;
        params.push(parsedItemsPerPage, offset);
        connection.query(query, params, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
                deviceCountInPageSet(page, itemsPerPage, pagesPerPageSet, (err, deviceCount) => {
                    if (err) {
                        callback(err, null);
                    } else {
                        isNextPageSet = deviceCount > itemsPerPage * pagesPerPageSet;
                        pagesetEnd = Math.ceil(deviceCount/itemsPerPage) - (isNextPageSet? 1 : 0);
                        const resultWithPagination = {
                            pagesetEnd,
                            isNextPageSet,
                            results // 실제 검색 결과
                        };

                        callback(null, resultWithPagination);
                    }   
                });
            }
        });
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