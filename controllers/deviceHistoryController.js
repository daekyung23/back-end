const DeviceHistory = require('../models/deviceHistoryModel'); 

const getDeviceHistoryById = async (req, res) => {
    const { deviceId } = req.params;
    try {
      const results = await new Promise((resolve, reject) => {
        DeviceHistory.getDeviceHistoryById(deviceId, (error, data) => {
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
  getDeviceHistoryById,
};
