const connection = require('../database');

const DeviceHistory = {

  getDeviceHistoryById: (deviceId, callback) => {
      const query = `
      select * from Device_History
      where Device_ID = ?
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
