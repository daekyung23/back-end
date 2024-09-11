const pool = require('../utils/database');

const User = {
  searchUser: async (searchTerms, isActive, offset, pageSize) => {
    try {
      // isActive가 null이면 조건 제거, 아니면 필터 추가
      const query = `
        SELECT *
        FROM user u
        LEFT JOIN dept d ON u.dept_id = d.dept_id
        WHERE (dept_name LIKE ? OR user_name LIKE ? OR login_id LIKE ? OR email LIKE ?)
        ${isActive === null ? '' : 'AND is_active = ?'}
        LIMIT ?, ?;
      `;

      // 파라미터 배열에서 isActive 값에 따라 동적으로 추가
      const params = [`%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`];
      if (isActive !== null) params.push(isActive);
      params.push(offset, pageSize);

      const [rows] = await pool.query(query, params);
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = User;
