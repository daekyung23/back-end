const CustomerHasReceptionTypeModel = require('./customerHasReceptionTypeModel');

const customerHasReceptionTypeController = {
  getAllParentReceptionTypes: (req, res) => {
    CustomerHasReceptionTypeModel.getAllParentReceptionTypes((error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  getReceptionTypeByCustomerId: (req, res) => {
    const customerId = req.params.customerId;

    CustomerHasReceptionTypeModel.getReceptionTypeByCustomerId(customerId, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  searchCustomerHasReceptionType: (req, res) => {
    const searchTerms = req.query.searchTerms || '';
    const page = req.query.page || 1;

    CustomerHasReceptionTypeModel.searchCustomerHasReceptionType(searchTerms, page, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  updateCustomerHasReceptionType: (req, res) => {
    const customerId = req.params.customerId;
    const customer = req.body;

    CustomerHasReceptionTypeModel.updateCustomerHasReceptionType(customerId, customer, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  },
};

module.exports = customerHasReceptionTypeController;
