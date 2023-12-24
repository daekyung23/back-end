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
  
  // 다른 메소드들...
};

module.exports = Department;