const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const UserRepository = {

  fromJoin: `
    FROM user u
    LEFT JOIN dept d ON u.dept_id = d.dept_id
  `,

  searchCondition: (searchTerms, isActive) => {
    const where = {
      condition: "(? OR ? OR ? OR ?)",  
      params: [
        { field: "d.dept_name", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "u.user_name", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "u.login_id", operator: "LIKE", value: `%${searchTerms}%` },
        { field: "u.email", operator: "LIKE", value: `%${searchTerms}%` }
      ]
    };

    if (isActive !== null) {
      where.params.push({ field: "u.is_active", operator: "=", value: isActive });
      where.condition = `(${where.condition}) AND`;
    }

    return where;
  },

  searchUser: async (searchTerms, isActive, offset, pageSize) => {
    const select = 'SELECT *'
    let selectFromJoin = select + UserRepository.fromJoin;
    const where = UserRepository.searchCondition(searchTerms, isActive);
    const limit = { offset, pageSize };
    return await DBHelper.search(selectFromJoin, where, null, limit);
  },

  searchUserCount: async (searchTerms, isActive) => {
    const select = 'SELECT COUNT(*) as total';
    let selectFromJoin = select + UserRepository.fromJoin;
    const where = UserRepository.searchCondition(searchTerms, isActive);
    const rows = await DBHelper.search(selectFromJoin, where);
    return rows[0].total;
  },

  // 사용자 존재 확인
  checkDuplicateLoginId: async (login_id) => {
    const rows = await DBHelper.search('user', { login_id });
    return rows.length > 0;
  },

  // 사용자 생성
  createUser: async (user) => {
    return await DBHelper.insert('user', user);
  },

  // 사용자 정보 수정
  patchUser: async (login_id, user) => {
    return await DBHelper.patch('user', user, { login_id });
  }


};

module.exports = UserRepository;
