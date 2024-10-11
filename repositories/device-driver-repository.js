const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const DeviceDriverRepository = {

  fromJoin: `
    FROM device_driver dd
    LEFT JOIN device_model dm ON dd.device_model_id = dm.device_model_id
  `,

  searchCondition: (searchTerms) => {
    const where = {
      condition: "? OR ?",  
      params: [
        { field: "model_name", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "printer_language", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" }
      ]
    };
    return where;
  },

  searchDeviceDriver: async (searchTerms, offset, pageSize) => {
    const select = 'SELECT *, dd.manufacturer as driver_manufacturer, dm.manufacturer as model_manufacturer ';
    const selectFromJoin = select + DeviceDriverRepository.fromJoin;
    const where = DeviceDriverRepository.searchCondition(searchTerms);
    const limit = { offset, pageSize };
    return await DBHelper.search(selectFromJoin, where, null, limit);
  },

  // 디바이스 드라이버 카운트 검색
  searchDeviceDriverCount: async (searchTerms) => {
    const select = 'SELECT COUNT(*) as total '
    const selectFromJoin = select + DeviceDriverRepository.fromJoin;
    const where = DeviceDriverRepository.searchCondition(searchTerms);
    const rows = await DBHelper.search(selectFromJoin, where);
    return rows[0].total;  // 총 레코드 수 반환
  },

  createDeviceDriver: async (deviceDriver) => {
    return await DBHelper.insert('device_driver', deviceDriver);
  },

  patchDeviceDriver: async (device_driver_id, deviceDriver) => {
    return await DBHelper.patch('device_driver', deviceDriver, { device_driver_id });
  },

  deleteDeviceDriver: async (device_driver_id) => {
    return await DBHelper.delete('device_driver', { device_driver_id });
  }
};

module.exports = DeviceDriverRepository;
