const connection = require('../database');

const Employee = {

  registerNewEmployee: (employeeData, callback) => {
    connection.query(
      `
      INSERT INTO employee (Employee_ID, Employee_Name, Password, Phone_Num, Corded_Phone_Num, Email, Position_ID, Department_ID, Permission_ID, Situation_ID, Is_Active, Edit_Date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW());
      `,
      [
        employeeData.Employee_ID,
        employeeData.Employee_Name,
        employeeData.Password,
        employeeData.Phone_Num,
        employeeData.Corded_Phone_Num,
        employeeData.Email,
        employeeData.Position_ID,
        employeeData.Department_ID,
        employeeData.Permission_ID,
        employeeData.Situation_ID,
        employeeData.Is_Active,
        employeeData.Edit_Date
      ],
      (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },

  getEmployeeById: (employeeId, callback) => {
    connection.query(`
      SELECT *
      FROM employee
      WHERE Employee_ID = ?;
    `, [employeeId], (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  searchEmployee: (searchTerms, callback) => {
    connection.query(
      `
      SELECT *
      FROM employee e
      LEFT JOIN department d ON e.Department_ID = d.Department_ID
      WHERE e.Permission_ID > 0
      AND (Department_Name LIKE ? OR Employee_Name LIKE ? OR Email LIKE ?);
      `,
      [`%${searchTerms}%`, `%${searchTerms}%`, `%${searchTerms}%`],
      (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },

  updateEmployee: (employeeId, employeeData, callback) => {
    connection.query(
      `
      UPDATE employee
      SET Employee_Name = ?, Password = ?, Phone_Num = ?, Corded_Phone_Num = ?, Email = ?, Position_ID = ?, Department_ID = ?, Permission_ID = ?, Situation_ID = ?, Is_Active = ?, Edit_Date = NOW()
      WHERE Permission_ID > 0 AND Employee_ID = ?;
      `,
      [
        employeeData.Employee_Name,
        employeeData.Password,
        employeeData.Phone_Num,
        employeeData.Corded_Phone_Num,
        employeeData.Email,
        employeeData.Position_ID,
        employeeData.Department_ID,
        employeeData.Permission_ID,
        employeeData.Situation_ID,
        employeeData.Is_Active,
        employeeId
      ],
      (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },

  deleteEmployee: (employeeId, callback) => {
    connection.query(
      `
      DELETE FROM employee
      WHERE Permission_ID > 0 AND Employee_ID = ?;
      `,
      [employeeId],
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

module.exports = Employee;