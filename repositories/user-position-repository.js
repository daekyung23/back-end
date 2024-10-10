const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const UserPositionRepository = {
  getAllUserPositions: async () => {
    const selectFrom = `
      SELECT *
      FROM user_position
    `;
    return await DBHelper.search(selectFrom);
  },
};

module.exports = UserPositionRepository;