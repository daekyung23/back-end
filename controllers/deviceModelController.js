const DeviceModel = require('../models/deviceModel'); 

const getAllDeviceModels = async (req, res) => {
    try {
      const results = await new Promise((resolve, reject) => {
        DeviceModel.getAllDeviceModels((error, data) => {
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
    getAllDeviceModels,
};