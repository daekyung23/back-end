const Employee = require('../models/employeeModel');

const getAllemployee = async (req, res) => {
    try {
      const results = await new Promise((resolve, reject) => {
        Employee.getAllemployee((error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    getAllemployee
};