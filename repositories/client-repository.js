const { updateClientBranch } = require('../controllers/client-branch-controller');
const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const ClientRepository = {

  // 공통 JOIN 절
  fromJoin: `
    FROM client c
    LEFT JOIN client_rate cr ON c.default_client_branch_rate_id = cr.client_rate_id
  `,

  // 검색 조건 생성
  searchCondition: (searchTerms, is_active, client_rate) => {
    const where = {
      condition: "(?) AND ? AND ? AND ?",  
      params: [
        { field: "c.client_name", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "c.parent_client_id", operator: "=", value: null },
        { field: "c.is_active", operator: "=", value: is_active },
        { field: "cr.rate_type", operator: "=", value: client_rate }
      ]
    };
    return where;
  },

  // 클라이언트 검색
  searchClient: async (searchTerms, is_active, client_rate, offset, pageSize) => {
    const select = 'SELECT *';
    const selectFromJoin = select + ClientRepository.fromJoin;
    const where = ClientRepository.searchCondition(searchTerms, is_active, client_rate);
    const limit = { offset, pageSize };
    try {
      return await DBHelper.search(selectFromJoin, where, null, limit);
    } catch (error) {
      console.error('Error in searchClient repository:', error); // 레포지토리에서의 에러 로그
      throw error; // 에러를 다시 던져서 컨트롤러에서 처리할 수 있게 함
    }
  },

  // 클라이언트 카운트 검색
  searchClientCount: async (searchTerms, is_active, client_rate) => {
    const select = 'SELECT COUNT(*) as total';
    const selectFromJoin = select + ClientRepository.fromJoin;
    const where = ClientRepository.searchCondition(searchTerms, is_active, client_rate);
    const rows = await DBHelper.search(selectFromJoin, where);
    try {
      const rows = await DBHelper.search(selectFromJoin, where);
      return rows[0].total; // 총 레코드 수 반환
    } catch (error) {
      console.error('Error in searchClientCount repository:', error); // 레포지토리에서의 에러 로그
      throw error; // 에러를 다시 던져서 컨트롤러에서 처리할 수 있게 함
    }
  },

  getAllClients: async (connection) => {
    const query = `SELECT * FROM client`;
    const [rows] = await connection.query(query);
    return rows;
  },

  createClient: async (client) => {
    const {
      rate_type,
      ...others
    } = client;

    // 필요한 데이터를 객체로 구성
    const postBody = {
        ...others,
        default_client_branch_rate_id: { 
            subQuery: "SELECT client_rate_id FROM client_rate WHERE rate_type = ?", 
            params: [rate_type] // 서브쿼리에 사용할 파라미터
        },
        is_active: 1
    };

    // DBHelper의 insert 함수 호출
    return await DBHelper.insert('client', postBody);
  },

  patchClient: async (client_id, client, connection) => {
    return await DBHelper.patch('client', client, { client_id }, connection);
  },

  changeMultipleClientActivations: async (clientIds, { is_active }, connection) => {
    if (clientIds.length === 0) return;
    const query = `UPDATE client SET is_active = ? WHERE client_id IN (${clientIds.map(() => '?').join(', ')})`;
    const params = [is_active, ...clientIds];
    const [result] = await connection.query(query, params);
    return result;
  },

  checkDuplicateClient: async (client_name) => {
    const select = 'SELECT COUNT(*) as total ';
    const from = 'FROM client';
    const where = {
      condition: "?", 
      params: [
        { field: "client_name", operator: "=", value: client_name },
      ]
    };
    
    const rows = await DBHelper.search(select + from, where);
    return rows[0].total > 0;  // 중복된 고객이 있으면 true 반환
  },

  deleteClient: async (client_id) => {
    return await DBHelper.delete('client', { client_id });
  }
};

module.exports = ClientRepository;
