const connection = require('../database');

const Area = {

  getAllAreas: (callback) => {
    connection.query(
      `
        SELECT *
        FROM Area
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

  getAreaById: (areaId, callback) => {
    connection.query(
      `
        SELECT * FROM Area WHERE Area_ID = ?
      `,
      [areaId], (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },
}
module.exports = Area;