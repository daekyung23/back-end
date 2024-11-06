const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const SidoRepository = {

  getAllSido: async () => {
    return await DBHelper.search('select * from sido', {});
  }
};

module.exports = SidoRepository;
