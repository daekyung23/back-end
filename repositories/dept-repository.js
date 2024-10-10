const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const DeptRepository = {
  getAllDept: async () => {
    const selectFrom = `
      SELECT *
      FROM dept
    `;
    return await DBHelper.search(selectFrom);
  },
};

module.exports = DeptRepository;