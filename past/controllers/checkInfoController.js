const CheckInfo = require('../repositories/checkInfoModel');

const getAllCheckInfos = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      CheckInfo.getAllCheckInfos((error, data) => {
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

const getCheckInfoByDeviceId = async (req, res) => {
  const { deviceId } = req.params;
  try {
    const results = await new Promise((resolve, reject) => {
      CheckInfo.getCheckInfoByDeviceId(deviceId, (error, data) => {
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
  getAllCheckInfos,
  getCheckInfoByDeviceId,
};