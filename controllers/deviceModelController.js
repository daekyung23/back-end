const DeviceModel = require('../repositories/deviceModelModel'); 

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

const getDeviceModelByManufacturer = async (req, res) => {
  const { manufacturer } = req.params;
  try {
    const results = await new Promise((resolve, reject) => {
      DeviceModel.getDeviceModelByManufacturer(manufacturer, (error, data) => {
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

const getManufacturers = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      DeviceModel.getManufacturers((error, data) => {
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
    getDeviceModelByManufacturer,
    getManufacturers
};