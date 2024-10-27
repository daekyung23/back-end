const { updateClientBranch } = require('../controllers/client-branch-controller');
const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기
const db = require('../utils/database');

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

  // parent_client_id로 하위 계열사를 조회하는 함수
  getSubClientsByParentId: async (parent_client_id) => {
    const selectFromJoin = `SELECT * FROM client`;
    const where = {
      condition: "?", 
      params: [{field: 'parent_client_id', operator: '=', value: parent_client_id}] 
    };

    try {
      const result = await DBHelper.search(selectFromJoin, where);
      return result;
    } catch (error) {
      console.log('여기에서 로그가 나와'); // 디버깅용 로그
      console.error('Error fetching sub-clients:', error);
      throw error;
    }
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

  patchClient: async (client_id, client) => {
    const {
      rate_type,
      ...others
    } = client;
  
    // 먼저 rate_type을 사용하여 client_rate_id를 조회
    let default_client_branch_rate_id = null;
    if (rate_type) {
      const [rows] = await db.query(
        "SELECT client_rate_id FROM client_rate WHERE rate_type = ?",
        [rate_type]
      );
      if (rows.length > 0) {
        default_client_branch_rate_id = rows[0].client_rate_id;
      } else {
        // 유효하지 않은 rate_type인 경우 에러 처리 또는 기본값 설정
        throw new Error('Invalid rate_type provided.');
      }
    }
  
    // 필요한 데이터를 객체로 구성
    const postBody = {
      ...others,
      // 조회한 client_rate_id를 설정
      ...(default_client_branch_rate_id !== null && { default_client_branch_rate_id }),
    };
  
    if (client.is_active !== undefined) {
      postBody.is_active = client.is_active === 'Y' ? 1 : 0;
    }
  
    return await DBHelper.patch('client', postBody, { client_id });
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
