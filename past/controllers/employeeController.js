const Employee = require('../repositories/employeeModel');

const registerNewEmployee = async (req, res) => {
  const employeeData = req.body; // Assuming the updated employee data is sent in the request body
  console.log(req.body);
  try {
    const results = await new Promise((resolve, reject) => {
      Employee.registerNewEmployee(employeeData, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    res.status(200).json({ message: 'Employee updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      Employee.getAllEmployee((error, data) => {
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

const getEmployeeById = async (req, res) => {
  const { employeeId } = req.params; // Assuming employeeId is passed as a parameter in the route
  
  try {
    const results = await new Promise((resolve, reject) => {
      Employee.getEmployeeById(employeeId, (error, data) => {
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

const searchEmployee = async (req, res) => {
  const { searchTerms, page = 1 } = req.query;
  
  try {
    const results = await new Promise((resolve, reject) => {
      Employee.searchEmployee(searchTerms, page, (error, data) => {
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

const updateEmployee = async (req, res) => {
  const { employeeId } = req.params;
  const employeeData = req.body; // Assuming the updated employee data is sent in the request body
  try {
    const results = await new Promise((resolve, reject) => {
      Employee.updateEmployee(employeeId, employeeData, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    res.status(200).json({ message: 'Employee updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const { employeeId, userPermission } = req.params;
  try {
    if (userPermission === '0') { // '0'은 admin
      // 사용자 삭제 로직
      const results = await new Promise((resolve, reject) => {
        Employee.deleteEmployee(employeeId, (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
      res.status(200).json({ message: 'Employee deleted successfully.' });
    } else {
      res.status(403).json({ message: 'Permission denied. Only admin can delete employees.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerNewEmployee,
  getAllEmployee,
  getEmployeeById,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
};