const connection = require('../database');

const Customer = {
  //고객사 전체 조회
    getAllCustomers: (callback) => {
      connection.query(`
        
      SELECT * 
      FROM Customer
        
      `, (error, results) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, results);
          }
        }
      );
    },

    //상위 고객사 ID로 하위 고객사 전체 조회
    getCustomerByParentCustomerId: (parentCustomerId, callback) => {
      connection.query(
        `
        SELECT * 
        FROM Customer WHERE Parent_Customer_ID = ?
        `,
        [parentCustomerId], (error, results) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, results);
          }
        }
      );
    },
    //고객사 ID로 조회
    getCustomerById: (customerId, callback) => {
      connection.query(
        `
        SELECT * 
        FROM Customer WHERE Customer_ID = ?
        `,
        [customerId], (error, results) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, results);
          }
        }
      );
    },
    //고객사 이름으로 검색
    searchCustomer: (searchTerms, page = 1, callback) => {
      const pageSize = 10;
      const offset = (page - 1) * pageSize;
      connection.query(
        `SELECT * 
        FROM Customer WHERE Customer_Name LIKE ?
        LIMIT ?, ?;
        `, 
        [`%${searchTerms}%`, offset, pageSize], 
        (error, results) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, results);
          }
        }
      );
    },
    //고객사 신규 등록
    registerNewCustomer: (customer, callback) => {
      connection.query(
        `
        INSERT INTO Customer (Parent_Customer_ID, Customer_Name, Customer_Rate_ID, RemoteSupport, Push_Alert)
        VALUES (?, ?, ?, ?, ?)
        `,
        [
          customer.Parent_Customer_ID,
          customer.Customer_Name,
          customer.Customer_Rate_ID,
          customer.RemoteSupport,
          customer.Push_Alert
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
    //고객사 기존 정보 수정
    updateCustomer: (customerId, customer, callback) => {
      connection.query(
        `
        UPDATE Customer SET Parent_Customer_ID = ?, Customer_Name = ?, Customer_Rate_ID = ?, RemoteSupport = ?, Push_Alert = ?
        WHERE Customer_ID = ?
        `,
        [
          customer.Parent_Customer_ID,
          customer.Customer_Name,
          customer.Customer_Rate_ID,
          customer.RemoteSupport,
          customer.Push_Alert,
          customerId
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
    //고객사 기존 정보 삭제
    deleteCustomer: (customerId, callback) => {
      connection.query(
        `
        DELETE FROM Customer
        WHERE Customer_ID = ?
        `,
        [customerId],
        (error, results) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, results);
          }
        }
      );
    },
}


module.exports = Customer;