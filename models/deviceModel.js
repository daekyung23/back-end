const connection = require('../database');

function getAllDeviceQuery() {
    return `
        SELECT 
        d.Device_ID AS Device_ID,
        dh.Registration_Date AS Registration_Date,
        dh.Modified_Date AS Modified_Date,
        d.Department_ID AS Department_ID,
        dm.Manufacturer AS Manufacturer,
        dm.Model_Name AS Model_Name,
        d.Serial_Num AS Serial_Num,
        d.Mac AS Mac,
        IF(l.Location_Type = 'Customer_Location', cl.Customer_Location_Name, NULL) AS Customer_Location_Name,
        IF(l.Location_Type = 'Storage', s.Storage_Location, NULL) AS Storage_Location,
        d.Condition AS \`Condition\`,
        CASE WHEN Fax_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Fax,
        CASE WHEN Desk_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Desk,
        CASE WHEN Shelf_Option.Device_ID IS NOT NULL THEN TRUE ELSE FALSE END AS Shelf

        FROM Device d
        JOIN (
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

        LEFT JOIN Device_Model dm ON d.Device_Model_ID = dm.Device_Model_ID

        LEFT JOIN Device_in_Storage dis ON d.Device_ID = dis.Device_ID
        LEFT JOIN \`Storage\` s ON dis.Storage_ID = s.Storage_ID

        LEFT JOIN location l ON dh.Location_ID = l.Location_ID
        LEFT JOIN customer_location cl ON l.Customer_Location_ID = cl.Customer_Location_ID

        LEFT JOIN Option_in_Device Fax_Option ON d.Device_ID = Fax_Option.Device_ID
        LEFT JOIN \`Option\` Fax ON Fax_Option.Option_ID = Fax.Option_ID AND Fax.Option_Name = 'Fax'
        LEFT JOIN Option_in_device Desk_Option ON d.Device_ID = Desk_Option.Device_ID
        LEFT JOIN \`Option\` Desk ON Desk_Option.Option_ID = Desk.Option_ID AND Desk.Option_Name = '데스크'
        LEFT JOIN Option_in_device Shelf_Option ON d.Device_ID = Shelf_Option.Device_ID
        LEFT JOIN \`Option\` Shelf ON Shelf_Option.Option_ID = Shelf.Option_ID AND Shelf.Option_Name = '3/4단'
    `;
}

const Device = {
    // 기기 세부 정보 검색
    searchDevices: (modelNameKeyword, serialNumKeyword, manufacturerKeyword, conditionKeyword, storageLocationKeyword, page, deviceId, callback) => {
        // 한 페이지당 결과 수
        const resultsPerPage = 20;
        // 페이지 번호에 따른 OFFSET 계산
        const offset = (page - 1) * resultsPerPage;
        
        let query = getAllDeviceQuery();
        query += `
            WHERE 
            dm.Model_Name LIKE '%${modelNameKeyword}%' AND 
            d.Serial_Num LIKE '%${serialNumKeyword}%' AND 
            dm.Manufacturer LIKE '%${manufacturerKeyword}%' AND
            d.Condition LIKE '%${conditionKeyword}%' AND
            s.Storage_Location LIKE '%${storageLocationKeyword}%'

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
            Storage_Location,
            d.Condition,
            Fax,
            Desk,
            Shelf
            LIMIT ${resultsPerPage} OFFSET ${offset}
        `;

        connection.query(query, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    },

    // 기기 ID로 기기 세부 정보 가져오기
    getDeviceById: (deviceId, callback) => {
        let query = getAllDeviceQuery();
        query += ` WHERE d.Device_ID = ${deviceId}`;

        connection.query(query, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
};

module.exports = Device;
