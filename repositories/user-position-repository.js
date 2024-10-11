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
};

module.exports = UserPositionRepository;