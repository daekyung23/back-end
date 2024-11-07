const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const ConsumableModelRepository = {

  // 공통 JOIN 절
  fromJoin: `
    FROM device_consumable_compatibility dcc
    LEFT JOIN consumable_model cm ON cm.consumable_model_id = dcc.consumable_model_id
    LEFT JOIN device_model dm ON dm.device_model_id = dcc.device_model_id
  `,

  // 검색 조건을 생성하는 함수
  searchCondition: (searchTerms, consumableType) => {
    const where = {
      condition: "((? OR ? OR ?) AND ?)", 
      params: [
        { field: "cm.manufacturer", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "model_name", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "consumable_name", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
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

  checkDuplicateConsumableModel: async (consumable_name) => {
    const select = 'SELECT COUNT(*) as total ';
    const from = 'FROM consumable_model';
    const where = {
      condition: "?", 
      params: [
        { field: "consumable_name", operator: "=", value: consumable_name },
      ]
    };
    const rows = await DBHelper.search(select+from, where);
    return rows[0].total> 0;
  },

  createConsumableModel: async (consumableModel) => {
    return await DBHelper.insert('consumable_model', consumableModel);
  },

  patchConsumableModel: async (consumable_model_id, consumableModel) => {
    return await DBHelper.patch('consumable_model', consumableModel, { consumable_model_id });
  },

  deleteConsumableModel: async (consumable_model_id) => {
    return await DBHelper.delete('consumable_model', { consumable_model_id });
  }
};

module.exports = ConsumableModelRepository;