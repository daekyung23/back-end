const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const ClientBranchRepository = {
  
  // 공통 JOIN 절
  fromJoin: `
    FROM client_branch cb
    LEFT JOIN client c ON cb.client_id = c.client_id
    LEFT JOIN sigungu sgg ON cb.sigungu_id = sgg.sigungu_id
    LEFT JOIN sido sd ON sgg.sido_id = sd.sido_id
  `,

  // 검색 조건 생성
  searchCondition: (searchTerm, isActive) => {
    const where = {
      condition: "(? OR ? OR ? OR ? OR ?) AND ?",  
      params: [
        { field: "cb.client_branch_name", operator: "LIKE", value: searchTerm, likeLeft: "%", likeRight: "%" },
        { field: "cb.branch_mgr_name", operator: "LIKE", value: searchTerm, likeLeft: "%", likeRight: "%" },
        { field: "cb.branch_mgr_mobile_num", operator: "LIKE", value: searchTerm, likeLeft: "%", likeRight: "%" },
        { field: "cb.branch_mgr_office_num", operator: "LIKE", value: searchTerm, likeLeft: "%", likeRight: "%" },
        { field: "cb.branch_mgr_email", operator: "LIKE", value: searchTerm, likeLeft: "%", likeRight: "%" },
        { field: "c.is_active", operator: "=", value: isActive }
      ]
    };

    return where;
  },

  // 클라이언트 지점 검색
  searchClientBranch: async (condition, pagination) => {
    const { searchTerm, isActive } = condition;
    const select = 'SELECT *';
    const selectFromJoin = select + ClientBranchRepository.fromJoin;
    const where = ClientBranchRepository.searchCondition(searchTerm, isActive);
    const limit = pagination;
    try {
      return await DBHelper.search(selectFromJoin, where, null, limit);
    } catch (error) {
      console.error('Error in searchClientBranch repository:', error); // 레포지토리에서의 에러 로그
      throw error; // 에러를 다시 던져서 컨트롤러에서 처리할 수 있게 함
    }
  },

  // 클라이언트 지점 카운트 검색
  searchClientBranchCount: async (condition) => {
    const { searchTerm, isActive } = condition;
    const select = 'SELECT COUNT(*) as total';
    const selectFromJoin = select + ClientBranchRepository.fromJoin;
    const where = ClientBranchRepository.searchCondition(searchTerm, isActive);
    try {
      const rows = await DBHelper.search(selectFromJoin, where);
      return rows[0].total; // 총 레코드 수 반환
    } catch (error) {
      console.error('Error in searchClientBranchCount repository:', error); // 레포지토리에서의 에러 로그
      throw error; // 에러를 다시 던져서 컨트롤러에서 처리할 수 있게 함
    }
  },


  getAllBranchesByClientIds: async (client_ids, connection) => {
    const selectFrom = `SELECT * FROM client_branch`;
    const where = {
      condition: "?",
      params: [{ field: 'client_id', operator: 'IN', value: client_ids }]
    }
    return await DBHelper.search(selectFrom, where, null, null, connection);
  },

  createClientBranch: async (clientBranch) => {
    return await DBHelper.insert('client_branch', clientBranch);
  },

  patchClientBranch: async (client_branch_id, clientBranch, connection) => {
    return await DBHelper.patch('client_branch', clientBranch, { client_branch_id }, connection);
  },

  changeMultipleClientBranchActivations: async (clientBranchIds, { is_active }, connection) => {
    if (clientBranchIds.length === 0) return;
    const query = `UPDATE client SET is_active = ? WHERE client_id IN (${clientBranchIds.map(() => '?').join(', ')})`;
    const params = [is_active, ...clientBranchIds];
    const [result] = await connection.query(query, params);
    return result;
  },

  deleteClientBranch: async (client_branch_id) => {
    return await DBHelper.delete('client_branch', { client_branch_id });
  },

  getBranchesByClientId: async (client_id) => {
    const select = 'SELECT * FROM client_branch';
    const where = {
        condition: "?",
        params: [{ field: 'client_id', operator: '=', value: client_id }]
    };
    try {
        return await DBHelper.search(select, where);
    } catch (error) {
        console.error('Error in getBranchesByClientId repository:', error);
        throw error;
    }
  },

  getClientIdByBranchId: async (client_branch_id) => {
    const select = 'SELECT * FROM client_branch';
    const where = {
        condition: "?",
        params: [{ field: 'client_branch_id', operator: '=', value: client_branch_id }]
    };
    try {
        return await DBHelper.search(select, where);
    } catch (error) {
        console.error('Error in getClientIdByBranchId repository:', error);
        throw error;
    }
  },

};

module.exports = ClientBranchRepository;