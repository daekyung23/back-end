const Customer = require('../models/customerModel');

const registerNewCustomer = async (req, res) => {
    const customerData = req.body;
    try {
      const results = await new Promise((resolve, reject) => {
        Customer.registerNewCustomer(customerData, (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
      res.status(200).json({ message: 'Customer registered successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getAllCustomers = async (req, res) => {
    try {
      const results = await new Promise((resolve, reject) => {
        Customer.getAllCustomers((error, data) => {
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

  const getCustomerByParentCustomerId = async (req, res) => {
    const { parentCustomerId } = req.params; // URL에서 parentCustomerId를 추출
  
    try {
      const results = await new Promise((resolve, reject) => {
        Customer.getCustomerByParentCustomerId(parentCustomerId, (error, data) => {
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
  
  const getCustomerById = async (req, res) => {
    const { customerId } = req.params;
    
    try {
      const results = await new Promise((resolve, reject) => {
        Customer.getCustomerById(customerId, (error, data) => {
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
  
  const searchCustomer = async (req, res) => {
    const { name, page = 1 } = req.query;
    
    try {
      const results = await new Promise((resolve, reject) => {
        Customer.searchCustomer(name, page, (error, data) => {
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
  
  const updateCustomer = async (req, res) => {
    const { customerId } = req.params;
    const customerData = req.body;
    try {
      const results = await new Promise((resolve, reject) => {
        Customer.updateCustomer(customerId, customerData, (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
      res.status(200).json({ message: 'Customer updated successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteCustomer = async (req, res) => {
    const { customerId } = req.params;
    try {
      const results = await new Promise((resolve, reject) => {
        Customer.deleteCustomer(customerId, (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
      res.status(200).json({ message: 'Customer deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    registerNewCustomer,
    getAllCustomers,
    getCustomerByParentCustomerId,
    getCustomerById,
    searchCustomer,
    updateCustomer,
    deleteCustomer,
  };
