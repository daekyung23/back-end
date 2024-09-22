const pool = require('../utils/database');

const Warehouse = {
  searchWarehouse: async (searchTerms, offset, pageSize) => {
    try {
      const [rows] = await pool.query(
        `
        SELECT *
        FROM warehouse w
        LEFT JOIN dept d ON w.mgmt_dept_id = d.dept_id
        WHERE dept_name LIKE ? OR warehouse_name LIKE ?
        LIMIT ?, ?;
        `,
        [`%${searchTerms}%`, `%${searchTerms}%`, offset, pageSize]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  searchWarehouseCount: async (searchTerms) => {
    try {
      const [countResult] = await pool.query(
        `
        SELECT COUNT(*) as total
        FROM warehouse w
        LEFT JOIN dept d ON w.mgmt_dept_id = d.dept_id
        WHERE dept_name LIKE ? OR warehouse_name LIKE ?;
        `,
        [`%${searchTerms}%`, `%${searchTerms}%`]
      );
      return countResult[0].total; // 총 레코드 수 반환
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Warehouse;
