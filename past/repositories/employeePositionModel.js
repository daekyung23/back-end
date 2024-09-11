const connection = require('../database');

const EmployeePositions = {
  getAllEmployeePositions: (callback) => {
    connection.query(`
  
    SELECT * 
    FROM employee_position
    
    `, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
  
  searchEmployeePositions: (searchTerms, callback) => {
    connection.query(
      `
      SELECT * 
      FROM employee_position
      WHERE Position_Name LIKE ?;
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

  getEmployeePositionById: (positionId, callback) => {
    connection.query(
      `
      SELECT *
      FROM employee_position
      WHERE Position_ID = ?;
      `,
      [positionId], (error, results) => {
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

module.exports = EmployeePositions;