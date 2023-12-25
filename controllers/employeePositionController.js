const EmployeePositions = require('../models/employeePositionModel');

const getAllEmployeePositions = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
        EmployeePositions.getAllEmployeePositions((error, data) => {
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

const searchEmployeePositions = async (req, res) => {
  const { searchTerms } = req.params; // Assuming employeeId is passed as a parameter in the route
  
  try {
    const results = await new Promise((resolve, reject) => {
        EmployeePositions.searchEmployeePositions(searchTerms, (error, data) => {
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
getAllEmployeePositions,
searchEmployeePositions
};