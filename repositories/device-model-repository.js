const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const DeviceModelRepository = {

  // 검색 조건을 생성하는 함수
  searchCondition: (searchTerms) => {
    const where = {
      condition: "? OR ?",  
      params: [
        { field: "model_name", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "manufacturer", operator: "LIKE", value: `%${searchTerms}%` }
      ]
    };
    return where;
  },

  // 디바이스 모델 검색
  searchDeviceModel: async (searchTerms, offset, pageSize) => {
    const select = 'SELECT * '
    const selectFromJoin = select + 'FROM device_model';
    const where = DeviceModelRepository.searchCondition(searchTerms);
    const limit = { offset, pageSize };
    return await DBHelper.search(selectFromJoin, where, null, limit);
  },

  // 디바이스 모델 카운트 검색
  searchDeviceModelCount: async (searchTerms) => {
    const select = 'SELECT COUNT(*) as total '
    const selectFromJoin = select + 'FROM device_model';
    const where = DeviceModelRepository.searchCondition(searchTerms);
    const rows = await DBHelper.search(selectFromJoin, where);
    return rows[0].total; // 총 레코드 수 반환
  },
};

module.exports = DeviceModelRepository;
