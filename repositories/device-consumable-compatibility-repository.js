const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const deviceConsumableCompatibilityRepository = {
  createDept: async (dept) => {
    return await DBHelper.insert('dept', dept);
  },

  deleteDept: async (dept_id) => {
    return await DBHelper.delete('dept', { dept_id });
  },
};

module.exports = deviceConsumableCompatibilityRepository;