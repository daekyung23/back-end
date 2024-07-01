const Storage = require('../repositories/storageModel');

const getAllStorages = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
        Storage.getAllStorages((error, data) => {
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
    getAllStorages,
};