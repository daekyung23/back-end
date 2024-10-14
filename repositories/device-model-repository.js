const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const DeviceModelRepository = {

  // 검색 조건을 생성하는 함수
  searchCondition: (searchTerms) => {
    const where = {
      condition: "? OR ?",  
      params: [
        { field: "model_name", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "manufacturer", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" }
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

  checkDuplicateDeviceModel: async (model_name) => {
    const select = 'SELECT COUNT(*) as total ';
    const from = 'FROM device_model';
    const where = {
      condition: "?", 
      params: [
        { field: "model_name", operator: "=", value: model_name },
      ]
    };
    const rows = await DBHelper.search(select+from, where);
    return rows[0].total > 0;
  },

  createDeviceModel: async ({ model_name, manufacturer, color_support }) => {
    const query = 'INSERT INTO device_model (model_name, manufacturer, color_support) VALUES (?, ?, ?)';
    const params = [model_name, manufacturer, color_support];
    return await DBHelper.insert(query, params);
  },
  
  updateDeviceModel: async ({ device_model_id, model_name, manufacturer, color_support }) => {
    const query = 'UPDATE device_model SET model_name = ?, manufacturer = ?, color_support = ? WHERE device_model_id = ?';
    const params = [model_name, manufacturer, color_support, device_model_id];
    return await DBHelper.patch(query, params);
  },
  
  deleteDeviceModel: async (device_model_id) => {
    return await DBHelper.delete('device_model', { device_model_id });
  },

  // 모든 제조사를 가져오는 함수
  getAllManufacturers: async () => {
    const query = 'SELECT DISTINCT manufacturer FROM device_model';
    return await DBHelper.search(query);
  },

  // 특정 제조사의 모델명을 가져오는 함수
  getModelsByManufacturer: async (manufacturer) => {
    // 쿼리에서 파라미터를 직접 문자열로 삽입
    const query = `SELECT device_model_id, model_name FROM device_model WHERE manufacturer = '${manufacturer}'`;
    return await DBHelper.search(query);  // 파라미터 없이 쿼리 실행
  }

};

module.exports = DeviceModelRepository;
