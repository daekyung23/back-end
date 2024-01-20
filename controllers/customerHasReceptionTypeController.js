const CustomerHasReceptionTypeModel = require('./customerHasReceptionTypeModel');

const customerHasReceptionTypeController = {
  getReceptionTypeByCustomerId: async (req, res) => {
    const customerId = req.params.customerId;

    try {
      const result = await CustomerHasReceptionTypeModel.getReceptionTypeByCustomerId(customerId);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error getting customer by ID: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateCustomerHasReceptionType: async (req, res) => {
    const customerId = req.params.customerId;
    const { receptionTypeNameArray, receptionTypeActivateArray } = req.body;

    try {
      const result = await CustomerHasReceptionTypeModel.updateCustomerHasReceptionType(
        customerId,
        receptionTypeNameArray,
        receptionTypeActivateArray
      );
      res.status(200).json(result);
    } catch (error) {
      console.error('Error updating customer: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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
