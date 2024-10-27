const DBHelper = require('../utils/DBHelper'); // DBHelper 불러오기

const DeptRepository = {
  getAllDept: async () => {
    const selectFrom = `
      SELECT *
      FROM dept
    `;
    return await DBHelper.search(selectFrom);
  },

  getAllDeptsNoPagination: async () => {
    const selectFrom = `SELECT * FROM dept`;
    return await DBHelper.search(selectFrom); // 전체 데이터를 반환
  },
  
  /**
   * 특정 부서 ID에 대한 하위 부서를 검색합니다.
   * @param {number|null} dept_id 
   * @returns {Array} - 하위 부서 목록
   */
  getChildDeptById: async (dept_id) => {
    let selectFrom = `
      SELECT *
      FROM dept
    `;

    const where = {
      condition: "?",  
      params: [
        { field: "parent_dept_id", operator: "=", value: dept_id }
      ]
    };
    return await DBHelper.search(selectFrom, where);
  },

  checkDuplicateDept: async (parent_dept_id, dept_name) => {
    const select = 'SELECT COUNT(*) as total ';
    const from = 'FROM dept';
    const where = {
      condition: "?", 
      params: [
        { field: "parent_dept_id", operator: "=", value: parent_dept_id },
        { field: "dept_name", operator: "=", value: dept_name },
      ]
    };
    const rows = await DBHelper.search(select+from, where);
    return rows[0].total > 0;
  },

  createDept: async (dept) => {
    return await DBHelper.insert('dept', dept);
  },

  patchDept: async (dept_id, dept) => {
    return await DBHelper.patch('dept', dept, { dept_id });
  },

  deleteDept: async (dept_id) => {
    return await DBHelper.delete('dept', { dept_id });
  },
};

module.exports = DeptRepository;