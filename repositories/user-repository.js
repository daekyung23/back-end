const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기
const { isValid } = require('../utils/validation');
const log = require('../utils/log');
const { HttpError, checkIf } = require('../utils/checkIf');
const UserRepository = {

  fromJoin: `
    FROM user u
    LEFT JOIN dept d ON u.dept_id = d.dept_id
  `,

  searchCondition: (searchTerms, is_active) => {
    const where = {
      condition: "(? OR ? OR ? OR ?) AND ?",  
      params: [
        { field: "d.dept_name", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "u.user_name", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "u.login_id", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "u.email", operator: "LIKE", value: searchTerms, likeLeft: "%", likeRight: "%" },
        { field: "u.is_active", operator: "=", value: is_active },
      ]
    };
    return where;
  },

  searchUser: async (searchTerms, is_active, offset, pageSize) => {
    const select = 'SELECT *'
    let selectFromJoin = select + UserRepository.fromJoin;
    log(!!checkIf(selectFromJoin).isValid);
    const where = UserRepository.searchCondition(searchTerms, is_active);
    const limit = { offset, pageSize };
    return await DBHelper.search(selectFromJoin, where, null, limit);
  },

  searchUserCount: async (searchTerms, is_active) => {
    const select = 'SELECT COUNT(*) as total';
    let selectFromJoin = select + UserRepository.fromJoin;
    const where = UserRepository.searchCondition(searchTerms, is_active);
    const rows = await DBHelper.search(selectFromJoin, where);
    return rows[0].total;
  },

  // 사용자 존재 확인
  checkDuplicateLoginId: async (login_id) => {
    const select = 'SELECT COUNT(*) as total ';
    const from = 'FROM user';
    const where = {
      condition: "?", 
      params: [
        { field: "login_id", operator: "=", value: login_id },
      ]
    };
    const rows = await DBHelper.search(select+from, where);
    return rows[0].total > 0;
  },

  // 사용자 생성
  createUser: async (user) => {
    return await DBHelper.insert('user', user);
  },

  // 사용자 정보 수정
  patchUser: async (login_id, user) => {
    return await DBHelper.patch('user', user, { login_id });
  },

  deleteUser: async (login_id) => {
    return await DBHelper.delete('user', { login_id });
  }

};

module.exports = UserRepository;
