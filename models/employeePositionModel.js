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
  // 다른 메소드들...
};

module.exports = EmployeePositions;