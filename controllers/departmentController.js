const Department = require('../repositories/departmentModel');

const getAllDepartments = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      Department.getAllDepartments((error, data) => {
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

const searchDepartments = async (req, res) => {
  const { searchTerms } = req.params; // Assuming employeeId is passed as a parameter in the route
  
  try {
    const results = await new Promise((resolve, reject) => {
      Department.searchDepartments(searchTerms, (error, data) => {
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

const getDepartmentById = async (req, res) => {
  const { departmentId } = req.params; // Assuming departmenteId is passed as a parameter in the route
  try {
    const results = await new Promise((resolve, reject) => {
      Department.getDepartmentById(departmentId, (error, data) => {
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
  getAllDepartments,
  searchDepartments,
  getDepartmentById
};