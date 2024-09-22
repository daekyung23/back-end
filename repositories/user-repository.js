const pool = require('../utils/database');

const User = {
  searchUser: async (searchTerms, isActive, offset, pageSize) => {
    try {
      const query = `
        SELECT *
        FROM user u
        LEFT JOIN dept d ON u.dept_id = d.dept_id
        WHERE (dept_name LIKE ? OR user_name LIKE ? OR login_id LIKE ? OR email LIKE ?)
        ${isActive === null ? '' : 'AND is_active = ?'}
        LIMIT ?, ?;
      `;

      const params = [`%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`];
      if (isActive !== null) params.push(isActive);
      params.push(offset, pageSize);

      const [rows] = await pool.query(query, params);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  searchUserCount: async (searchTerms, isActive) => {
    try {
      const countQuery = `
        SELECT COUNT(*) as total
        FROM user u
        LEFT JOIN dept d ON u.dept_id = d.dept_id
        WHERE (dept_name LIKE ? OR user_name LIKE ? OR login_id LIKE ? OR email LIKE ?)
        ${isActive === null ? '' : 'AND is_active = ?'};
      `;

      const params = [`%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`];
      if (isActive !== null) params.push(isActive);

      const [countResult] = await pool.query(countQuery, params);
      return countResult[0].total; // 총 레코드 수 반환
    } catch (error) {
      throw error;
    }
  },
};

module.exports = User;
