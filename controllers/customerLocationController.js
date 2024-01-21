const CustomerLocation = require('../models/customerLocationModel');


const getAllCustomerLocationById = async(req, res) => {
  const { customerId } = req.params;
  try {
    const results = await new Promise((resolve, reject) => {
      CustomerLocation.getAllCustomerLocationById(customerId, (error, data) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const registerNewCustomerLocation = async (req, res) => {
  const customerLocationData = req.body;
  try {
    const results = await new Promise((resolve, reject) => {
      CustomerLocation.registerNewCustomerLocation(customerLocationData, (error, data) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    req.status(201).json({message: 'CustomerLocation Register Successfully: ', newLocation: results.insertId});
  } catch (error) {
    res.status(500).json({error: message});
  }
};
const updateCustomerLocation = async (req, res) => {
  const customerLocationData = req.body;
  try {
    const results = await new Promise((resolve, reject) => {
      CustomerLocation.updateCustomerLocation(customerLocationData, (error, data) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Customer Location Not Found' });
    } else {
      res.status(200).json({ message: 'Customer Location Updated Successfully' });
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const deleteCustomerLocation = async (req, res) => {
  const { customerId, locationId} = req.params;
  try {
    const results = await new Promise((resolve, reject) => {
      CustomerLocation.deleteCustomerLocation(customerId, locationId, (error, data) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }      
      });
    });
    if(results.affectedRows === 0) {
      res.status(404).json({message: 'Customer Location Not Found'});
    } else {
      res.status(200).json({message: 'Customer Location Delete Successfully'});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  getAllCustomerLocationById,
  registerNewCustomerLocation,
  updateCustomerLocation,
  deleteCustomerLocation,
};