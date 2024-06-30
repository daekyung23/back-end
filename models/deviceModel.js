const connection = require('../database');

function getDeviceCount() {
    return `
        SELECT COUNT(Device_ID) AS Total_Device_Count
        FROM Device d
        ${joinsDetail()}
    `;
}

function getAllDevice() {
    return `
        SELECT 
            -- 기본 장치 정보
            d.Device_ID AS Device_ID,
            dh.Registration_Date AS Registration_Date,
            dh.Modified_Date AS Modified_Date,
            d.Department_ID AS Department_ID,
            dm.Manufacturer AS Manufacturer,
            dm.Model_Name AS Model_Name,
            d.Serial_Num AS Serial_Num,
            d.Mac AS Mac,

            -- 위치 정보
            IF(l.Location_Type = 'Customer_Location', cl.Customer_Location_Name, NULL) AS Customer_Location_Name,
            IF(l.Location_Type = 'Customer_Location', c.Customer_Name, NULL) AS Customer_Name,
            IF(l.Location_Type = 'Storage', s.Storage_Location_Name, NULL) AS Storage_Location_Name,
            
            -- 상태 정보
            d.Condition AS \`Condition\`,

            -- 옵션 정보
            CASE WHEN Fax_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Fax,
            CASE WHEN Desk_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Desk,
            CASE WHEN Shelf_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Shelf

        FROM Device d
        ${joinsDetail()}
        `;
}

function joinsDetail() {
    return `
        -- 최신 장치 기록 조인
        LEFT JOIN (
            SELECT 
                dh1.Device_ID,
                dh1.Registration_Date,
                dh1.Modified_Date,
                dh1.Location_ID
            FROM Device_History dh1
            JOIN (
                SELECT 
                    Device_ID,
                    MAX(Modified_Date) AS Last_Modified_Date
                FROM Device_History
                GROUP BY Device_ID
            ) dh2 ON dh1.Device_ID = dh2.Device_ID AND dh1.Modified_Date = dh2.Last_Modified_Date
        ) dh ON d.Device_ID = dh.Device_ID

        -- 장치 모델 정보 조인
        LEFT JOIN Device_Model dm ON d.Device_Model_ID = dm.Device_Model_ID

        -- 창고 정보 조인
        LEFT JOIN Device_in_Storage dis ON d.Device_ID = dis.Device_ID
        LEFT JOIN \`Storage\` s ON dis.Storage_ID = s.Storage_ID

        -- 위치 정보 조인
        LEFT JOIN location l ON dh.Location_ID = l.Location_ID
        LEFT JOIN customer_location cl ON l.Customer_Location_ID = cl.Customer_Location_ID
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

const Device = {
    // 기기 세부 정보 검색
    searchDevices: (modelNameKeyword, serialNumKeyword, manufacturerKeyword, conditionKeyword, storageLocationKeyword, page, callback) => {
        // 한 페이지당 결과 수
        const resultsPerPage = 20;
        // 페이지 번호에 따른 OFFSET 계산
        const offset = (page - 1) * resultsPerPage;
        
        let query = getAllDevice();
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
                dh.Registration_Date,
                dh.Modified_Date,
                d.Department_ID,
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
        params.push(resultsPerPage, offset);



        connection.query(query, params, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    // 기기 ID로 기기 세부 정보 가져오기
    getDeviceById: (deviceId, callback) => {
        let query = getAllDevice();
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
};

module.exports = Device;
