const connection = require('../database');

const CustomerLocation = {
  getAllCustomerLocationById: (customerId, callback) => {
    connection.query(
      `
        SELECT * FROM Customer_Location WHERE Customer_ID = ?
      `,
      [customerId], (error, results) => {
        if(error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },

  registerNewCustomerLocation: (customerLocationData, callback) => {
    connection.query(
      `
        INSERT INTO Customer_Location (Customer_ID, Customer_Location_Rate_ID, Customer_Location_Name, Area_ID, Use_Status, Details, Managed_Department_ID)
        VALUES (?, ?, ?, ?, ?, ?, ?);
      `,
      [
        customerLocationData.Customer_ID,
        customerLocationData.Customer_Location_ID,
        customerLocationData.Customer_Location_Name,
        customerLocationData.Area_ID,
        customerLocationData.Use_Status,
        customerLocationData.Details,
        customerLocationData.Managed_Department_ID
      ],
      (error, results) => {
        if(error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },

  updateCustomerLocation: (customerLocationData, callback) => {
    connection.query(
      `
        UPDATED Customer_Location
        SET
        Customer_Location_Rate_ID = ?,
        Customer_Location_Name = ?,
        Area_ID = ?,
        Use_Status = ?,
        Details = ?,
        Managed_Department_ID = ?,
        WHERE Customer_Location_ID = ? AND Customer_ID = ?;
      `,
      [
        customerLocationData.Customer_Location_Rate_ID,
        customerLocationData.Customer_Location_Name,
        customerLocationData.Area_ID,
        customerLocationData.Use_Status,
        customerLocationData.Details,
        customerLocationData.Managed_Department_ID,
        customerLocationData.Customer_Location_ID,
        customerLocationData.Customer_ID,
      ],
      (error, results) => {
        if(error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  },

  deleteCustomerLocation: (customerId, customerLocationId, callback) => {
    connection.query(
      `
        DELETE From Customer_Location
        WHERE Customer_ID = ? AND Customer_Location_ID = ?;
      `,
      [customerId, customerLocationId],
      (error, reults) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, reults);
        }
      }
    );
  },
};

module.exports = CustomerLocation;