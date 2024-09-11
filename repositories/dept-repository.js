const pool = require('../utils/database');

const Dept = {
  getAllDept : async () => {
    try {
      const [rows] = await pool.query(
        `
        SELECT *
        FROM dept
        `
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Dept;