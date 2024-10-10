const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기
const pool = require('../utils/database');
const WarehouseRepository = {

  // 공통 JOIN 절
  fromJoin: `
    FROM warehouse w
    LEFT JOIN dept d ON w.mgmt_dept_id = d.dept_id
  `,

  // 검색 조건 생성
  searchCondition: (searchTerms) => {
    const where = {
      condition: "? OR ?",  
      params: [
        { field: "d.dept_name", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "w.warehouse_name", operator: "LIKE", value: `%${searchTerms}%` }
      ]
    };
    return where;
  },

  // 창고 검색
  searchWarehouse: async (searchTerms, offset, pageSize) => {
    const select = 'SELECT *';
    const selectFromJoin = select + WarehouseRepository.fromJoin;
    const where = WarehouseRepository.searchCondition(searchTerms);
    const limit = { offset, pageSize };
    try {
      return await DBHelper.search(selectFromJoin, where, null, limit);
    } catch (error) {
      console.error('Error in searchWarehouse repository:', error); // 레포지토리에서의 에러 로그
      throw error; // 에러를 다시 던져서 컨트롤러에서 처리할 수 있게 함
    }
  },

  // 창고 카운트 검색
  searchWarehouseCount: async (searchTerms) => {
    const select = 'SELECT COUNT(*) as total';
    const selectFromJoin = select + WarehouseRepository.fromJoin;
    const where = WarehouseRepository.searchCondition(searchTerms);
    const rows = await DBHelper.search(selectFromJoin, where);
    try {
      const rows = await DBHelper.search(selectFromJoin, where);
      return rows[0].total; // 총 레코드 수 반환
    } catch (error) {
      console.error('Error in searchWarehouseCount repository:', error); // 레포지토리에서의 에러 로그
      throw error; // 에러를 다시 던져서 컨트롤러에서 처리할 수 있게 함
    }
  },
  
  checkDuplicateWarehouse: async (warehouse_name) => {
    try {
      const rows = await DBHelper.search('warehouse', { warehouse_name });
      return rows.length > 0;
    } catch (error) {
      console.error('Error in checkWarehouseName repository:', error);
      throw error;
    }
  },

  createWarehouse: async (warehouse) => {
    const connection = await pool.getConnection(); // DB 연결 가져오기
    await connection.beginTransaction(); // 트랜잭션 시작
    try {
      const newWarehouse = await DBHelper.insert('warehouse', warehouse);
      const location = { 
        location_type: 'warehouse',
        warehouse_id: newWarehouse.warehouse_id,
        client_branch_id: null
      };
      const newLocation = await DBHelper.insert('location', location);
      await connection.commit();
      return { newWarehouse, newLocation }; // 추가된 데이터 반환
    } catch (error) {
      await connection.rollback();
      console.error('Error in createWarehouse repository:', error);
      throw error; 
    }
  },

  patchWarehouse: async (warehouse_id, updateFields) => {
    try {
      return await DBHelper.patch('warehouse', updateFields, { warehouse_id });
    } catch (error) {
      console.error('Error in patchWarehouse repository:', error);
      throw error;
    }
  },

};

module.exports = WarehouseRepository;
