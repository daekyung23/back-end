const connection = require('../database');

const Storage = {
    getAllStorages: (callback) => {
        connection.query(
            `
            SELECT Storage_Location
            FROM Storage
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

module.exports = Storage;