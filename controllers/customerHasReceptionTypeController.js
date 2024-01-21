const CustomerHasReceptionTypeModel = require('../models/customerHasReceptionTypeModel');

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

  updateCustomerHasReceptionType: (req, res) => {
    const customerId = req.params.customerId;
    const receptionType = req.body.receptionType;

    CustomerHasReceptionTypeModel.updateCustomerHasReceptionType(customerId, receptionType, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  searchCustomerHasReceptionType: async (req, res) => {
    const searchTerms = req.query.searchTerms || '';
    const page = req.query.page || 1;

    try {
      const result = await CustomerHasReceptionTypeModel.searchCustomerHasReceptionType(searchTerms, page);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error searching employee: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = customerHasReceptionTypeController;
