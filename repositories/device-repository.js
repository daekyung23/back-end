const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const DeviceRepository = {

  fromJoin: `
    FROM device d
    LEFT JOIN dept od ON d.owner_dept_id = od.dept_id
    LEFT JOIN device_model dm ON d.device_model_id = dm.device_model_id
    LEFT JOIN device_location_log dl ON d.last_location_log_id = dl.device_location_log_id
    LEFT JOIN location l ON dl.location_id = l.location_id
    LEFT JOIN warehouse w ON l.warehouse_id = w.warehouse_id
    LEFT JOIN client_branch cb ON l.client_branch_id = cb.client_branch_id
    LEFT JOIN device_status ds ON d.status_id = ds.status_id
    LEFT JOIN device_option do ON d.device_id = do.location_device_id
    LEFT JOIN option_model om ON do.device_option_id = om.option_model_id
  `,

  searchCondition: (searchTerms) => {
    const where = {
      condition: "(? OR ? OR ?)",  
      params: [
        { field: "dm.model_name", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "d.serial", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "cb.client_branch_name", operator: "LIKE", value: `%${searchTerms}%` }
      ]
    };

    return where;
  },

  searchDevice: async (searchTerms, offset, pageSize) => {
    const select = `
      SELECT d.*, 
        do.location_type AS option_location_type,
        dm.manufacturer AS model_manufacturer,
        MAX(CASE WHEN om.option_type = 'fax' THEN TRUE ELSE FALSE END) AS fax,
        MAX(CASE WHEN om.option_type = 'desk' THEN TRUE ELSE FALSE END) AS desk,
        MAX(CASE WHEN om.option_type = 'shelf' THEN TRUE ELSE FALSE END) AS shelf
    `;
  
    let selectFromJoin = select + DeviceRepository.fromJoin; 
    const where = DeviceRepository.searchCondition(searchTerms, isActive);
    const limit = { offset, pageSize };
    const groupBy = `d.device_id`;
    return await DBHelper.search(selectFromJoin, where, groupBy, limit);
  },

  searchDeviceCount: async (searchTerms) => {
    const select = 'SELECT COUNT(*) as total';
    let selectFromJoin = select + DeviceRepository.fromJoin;
    const where = DeviceRepository.searchCondition(searchTerms, isActive);
    const groupBy = `d.device_id`; 
    const rows = await DBHelper.search(selectFromJoin, where, groupBy);
    return rows[0].total;
  },

  // 사용자 존재 확인
  // checkDuplicateLoginId: async (login_id) => {
  //   const rows = await DBHelper.search('user', { login_id });
  //   return rows.length > 0;
  // },

  createDevice: async (device) => {
    return await DBHelper.insert('device', device);
  },

  patchDevice: async (device_id, device) => {
    return await DBHelper.patch('device', device, { device_id });
  }
};

module.exports = DeviceRepository;
