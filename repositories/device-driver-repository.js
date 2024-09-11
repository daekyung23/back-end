const pool = require('../utils/database');

const DeviceDriver = {
  searchDeviceDriver : async (searchTerms, offset, pageSize) => {
    try {
      const [rows] = await pool.query(
        `
        SELECT *, dd.manufacturer as driver_manufacturer, dm.manufacturer as model_manufacturer
        FROM device_driver dd
        LEFT JOIN device_model dm ON dd.device_model_id = dm.device_model_id
        WHERE model_name LIKE ? OR printer_language LIKE ?
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

module.exports = DeviceDriver;