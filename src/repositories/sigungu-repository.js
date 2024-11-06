const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const SigunguRepository = {

  getSigunguBySidoId: async (sido_id) => {
    where = {
      condition: '?',
      params: [{ field: 'sido_id', operator: '=', value: sido_id }]
    };
    return await DBHelper.search('select * from sigungu', where);
  }
};

module.exports = SigunguRepository;
