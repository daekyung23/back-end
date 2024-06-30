const connection = require('../database');

const CheckInfo = {

  getAllCheckInfos: (callback) => {
    connection.query(
      `
        SELECT *
        FROM Check_Info
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

  getCheckInfoByDeviceId: (deviceId, callback) => {
    connection.query(
      `
        SELECT * FROM Check_Info WHERE Device_ID = ?
      `,
      [deviceId], (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },
}
module.exports = CheckInfo;