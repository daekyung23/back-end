    const CustomerHasReceptionType = require('../models/customerHasReceptionTypeModel');

<<<<<<< HEAD
    const customerHasReceptionTypeController = {
        getAllParentReceptionTypes: async (req, res) => {
            try {
                const results = await new Promise((resolve, reject) => {
                    CustomerHasReceptionType.getAllParentReceptionTypes((error, data) => {
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
        },

        getReceptionTypeByCustomerId: async (req, res) => {
            const {customerId} = req.params;
            try {
                const results = await new Promise((resolve, reject) => {
                    CustomerHasReceptionType.getReceptionTypeByCustomerId(customerId, (error, data) => {
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
        },
=======
const customerHasReceptionTypeController = {
  
  getReceptionTypeByCustomerId: async (req, res) => {
    const customerId = req.params.customerId;
    console.log(customerId);
    try {
      const result = await CustomerHasReceptionTypeModel.getReceptionTypeByCustomerId(customerId);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error getting customer by ID: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
>>>>>>> 6bcc65aad448bc8dea086ad316a702f25c330905

        searchCustomerHasReceptionType: async (req, res) => {
            const searchTerms = req.query.searchTerms || '';
            const page = req.query.page || 1;

            try {
                const results = await new Promise((resolve, reject) => {
                    CustomerHasReceptionType.searchCustomerHasReceptionType(searchTerms, page, (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });
                res.status(200).json(results);
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        },

        updateCustomerHasReceptionType: (req, res) => {
            const customerId = req.params.customerId;
            const receptionType = req.body.receptionType;

            CustomerHasReceptionType.updateCustomerHasReceptionType(customerId, receptionType, (error, result) => {
            if (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.status(200).json(result);
            }
            });
        },
    };

    module.exports = customerHasReceptionTypeController;
