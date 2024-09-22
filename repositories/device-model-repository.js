const pool = require('../utils/database');

const DeviceModel = {
  searchDeviceModel: async (searchTerms, offset, pageSize) => {
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

  searchDeviceModelCount: async (searchTerms) => {
    try {
      const [countResult] = await pool.query(
        `
        SELECT COUNT(*) as total
        FROM device_model
        WHERE model_name LIKE ? OR manufacturer LIKE ?;
        `,
        [`%${searchTerms}%`, `%${searchTerms}%`]
      );
      return countResult[0].total; // 총 레코드 수 반환
    } catch (error) {
      throw error;
    }
  },
};

module.exports = DeviceModel;
