const connection = require('../database');

const Department = {
  getAllDepartments: (callback) => {
    connection.query(`
  
    SELECT * 
    FROM department
    
    `, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
  
  searchDepartments: (searchTerms, callback) => {
    connection.query(
      `
      SELECT child.Department_ID as Department_ID, child.Department_Name as Department_Name, parent.Department_Name as Parent_Department_Name, parent.Department_ID as Parent_Department_ID
      FROM department child
      LEFT JOIN department parent ON child.Parent_Department_ID = parent.Department_ID
      WHERE child.Department_Name LIKE ?;
      `,
      [`%${searchTerms}%`],
      (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },
  getDepartmentById: (departmentId, callback) => {
    connection.query(
      `
      SELECT *
      FROM department
      WHERE Department_ID = ?;
      `,
      [departmentId], (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results[0]); // 결과는 배열로 반환되므로 첫 번째 요소만 반환합니다.
        }
      }
    );
  },
  // 다른 메소드들...
};

module.exports = Department;