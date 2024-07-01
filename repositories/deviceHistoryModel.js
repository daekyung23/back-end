const connection = require('../database');

const DeviceHistory = {

  getDeviceHistoryById: (deviceId, callback) => {
    const query = `
      SELECT dh.*,

      -- 위치 정보
      CASE
        WHEN l.Location_Type = 'Customer_Location' THEN CONCAT(c.Customer_Name, '/', cl.Customer_Location_Name)
        WHEN l.Location_Type = 'Storage' THEN s.Storage_Location_Name
        ELSE NULL
      END AS Location_Name,
      CASE
        WHEN l.Location_Type = 'Customer_Location' THEN c.Customer_Name
        ELSE NULL
      END AS Customer_Name
            
      From Device_History dh

      -- 위치 정보 조인
      LEFT JOIN Location l ON dh.Location_ID = l.Location_ID

      LEFT JOIN \`Storage\` s ON dh.Location_ID = s.Storage_ID
      LEFT JOIN customer_location cl ON dh.Location_ID = cl.Customer_Location_ID
      LEFT JOIN customer c ON cl.Customer_ID = c.Customer_ID

      WHERE dh.Device_ID = ?
    `
    connection.query(query,[deviceId], (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
}
module.exports = DeviceHistory;
