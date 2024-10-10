const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const ConsumableModelRepository = {

  // 공통 JOIN 절
  fromJoin: `
    FROM consumable_model cm
    LEFT JOIN device_consumable_compatibility dcc ON cm.consumable_model_id = dcc.device_model_id
    LEFT JOIN device_model dm ON dm.device_model_id = dcc.device_model_id
  `,

  // 검색 조건을 생성하는 함수
  searchCondition: (searchTerms, consumableType) => {
    const where = {
      condition: "((? OR ? OR ?) AND ?)", 
      params: [
        { field: "cm.manufacturer", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "model_name", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "consumable_name", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "consumable_type", operator: "=", value: consumableType }
      ]
    };
    return where;
  },

  searchConsumableModel: async (searchTerms, consumableType, offset, pageSize) => {
    const select = 'SELECT *, cm.manufacturer as consumable_manufacturer, dm.manufacturer as model_manufacturer ';
    const selectFromJoin = select + ConsumableModelRepository.fromJoin;
    const where = ConsumableModelRepository.searchCondition(searchTerms, consumableType);
    const limit = { offset, pageSize };
    return await DBHelper.search(selectFromJoin, where, null, limit);
  },

  searchConsumableModelCount: async (searchTerms, consumableType) => {
    const select = 'SELECT COUNT(*) as total ';
    const selectFromJoin = select + ConsumableModelRepository.fromJoin;
    const where = ConsumableModelRepository.searchCondition(searchTerms, consumableType);
    const rows = await DBHelper.search(selectFromJoin, where);
    return rows[0].total;  // 총 레코드 수 반환
  },
};

module.exports = ConsumableModelRepository;
