const Device = require('../repositories/deviceRepository'); 

const searchDevices = async (req, res) => {
    const { modelNameKeyword, serialNumKeyword, manufacturerKeyword, conditionKeyword, storageLocationKeyword, page } = req.query;

    Device.searchDevices(modelNameKeyword, serialNumKeyword, manufacturerKeyword, conditionKeyword, storageLocationKeyword, page, (error, results) => {
        if (error) {
            console.error('Error in searching device details:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });
};

const getDeviceById = async (req, res) => {
    const { deviceId } = req.params;
    try {
      const results = await new Promise((resolve, reject) => {
        Device.getDeviceById(deviceId, (error, data) => {
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
  
const getAllDeviceConditions = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      DeviceModel.getAllDeviceConditions((error, data) => {
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


const registerNewDevice = async (req, res) => {
  const deviceData = req.body;
  console.log(req.body);
  try {
    const results = await new Promise((resolve, reject) => {
      DeviceModel.insertDevice(deviceData, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    res.status(200).json({ message: 'Device insert successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    searchDevices,
    getDeviceById,
    getAllDeviceConditions,
    registerNewDevice,
};
