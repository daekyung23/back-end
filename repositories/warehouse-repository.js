const pool = require('../utils/database');

const Warehouse = {
  searchWarehouse : async (searchTerms, offset, pageSize) => {
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
};

module.exports = Warehouse;