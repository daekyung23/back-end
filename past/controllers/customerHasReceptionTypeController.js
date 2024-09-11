    const CustomerHasReceptionType = require('../repositories/customerHasReceptionTypeModel');

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

        updateCustomerHasReceptionType: async (req, res) => {
            const {customerId} = req.params;
            const receptionType = req.body.receptionType;
            console.log(customerId);
            console.log(receptionType);
            try {
                const results = await new Promise((resolve, reject) => {
                    CustomerHasReceptionType.updateCustomerHasReceptionType(customerId, receptionType, (error, result) => {
                        if (error) {
                            console.log("여기에서 에러가 발생함");
                            res.status(500).json({ error: 'Internal Server Error' });
                        } else {
                            res.status(200).json(result);
                        }
                    });
                });
                res.status(200).json({ message: 'CustomerHasReceptionType updated successfully.' });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }     
        },
    };

    module.exports = customerHasReceptionTypeController;
