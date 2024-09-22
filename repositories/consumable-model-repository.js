const pool = require('../utils/database');

const ConsumableModel = {
  searchConsumableModel: async (searchTerms, consumableType, offset, pageSize) => {
    try {
      const [rows] = await pool.query(
        `
        SELECT *, cm.manufacturer as consumable_manufacturer, dm.manufacturer as model_manufacturer
        FROM consumable_model cm
        LEFT JOIN device_consumable_compatibility dcc ON cm.consumable_model_id = dcc.consumable_model_id
        LEFT JOIN device_model dm ON dm.device_model_id = dcc.device_model_id
        WHERE (cm.manufacturer LIKE ? OR model_name LIKE ? OR consumable_name LIKE ?)
        AND (consumable_type LIKE ?)
        LIMIT ?, ?;
        `,
        [`%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`, `%${consumableType}%`, offset, pageSize]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  searchConsumableModelCount: async (searchTerms, consumableType) => {
    try {
      const [countResult] = await pool.query(
        `
        SELECT COUNT(*) as total
        FROM consumable_model cm
        LEFT JOIN device_consumable_compatibility dcc ON cm.consumable_model_id = dcc.consumable_model_id
        LEFT JOIN device_model dm ON dm.device_model_id = dcc.device_model_id
        WHERE (cm.manufacturer LIKE ? OR model_name LIKE ? OR consumable_name LIKE ?)
        AND (consumable_type LIKE ?);
        `,
        [`%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`, `%${consumableType}%`]
      );
      return countResult[0].total; // 총 레코드 수 반환
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ConsumableModel;
