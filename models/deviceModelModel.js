const connection = require('../database');

const DeviceModel = {
    getAllDeviceModels: (callback) => {
        connection.query(
            `
            SELECT *
            FROM Device_Model
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

    getDeviceModelByManufacturer: (manufacturer, callback) => {
        connection.query(
            `
            SELECT Model_Name
            FROM Device_Model
            WHERE Manufacturer = ?
            `
        , [manufacturer], (error, results) => {
              if (error) {
                callback(error, null);
              } else {
                callback(null, results);
              }
            }
        );
    },
}

module.exports = DeviceModel;