const pool = require('../utils/database');

const DeviceModel = {
  searchDeviceModel : async (searchTerms, offset, pageSize) => {
    try {
      const [rows] = await pool.query(
        `
        SELECT *
        FROM device_model
        WHERE model_name LIKE ? OR manufacturer LIKE ?
        LIMIT ?, ?;
        `,
        [`%${searchTerms}%`, `%${searchTerms}%`, offset, pageSize]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = DeviceModel;