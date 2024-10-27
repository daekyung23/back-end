const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const UserPositionRepository = {
  getAllUserPositions: async () => {
    const selectFrom = `
      SELECT *
      FROM user_position
    `;
    return await DBHelper.search(selectFrom);
  },

  deleteUserPosition: async (user_position_id) => {
    return await DBHelper.delete('user_position', { user_position_id });
  },

  getPositionById: async (user_position_id) => {
    const selectFrom = `
      SELECT position_name
      FROM user_position
    `;
    const where = {
      condition: '?',
      params: [{ field: 'user_position_id', operator: '=', value: user_position_id }],
    };
    return await DBHelper.search(selectFrom, where);
  },

  getPositionByName: async (position_name) => {
    const selectFrom = `
      SELECT user_position_id
      FROM user_position
    `;
    const where = {
      condition: '?',
      params: [{ field: 'position_name', operator: '=', value: position_name }],
    };
    return await DBHelper.search(selectFrom, where);
  },
};

module.exports = UserPositionRepository;