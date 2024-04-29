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
}

module.exports = DeviceModel;