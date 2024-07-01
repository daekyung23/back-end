const Area = require('../repositories/areaModel');

const getAllAreas = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {
      Area.getAllAreas((error, data) => {
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

const getAreaById = async (req, res) => {
  const { areaId } = req.params;
  try {
    const results = await new Promise((resolve, reject) => {
      Area.getAreaById(areaId, (error, data) => {
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
    getAreaById,
    getAllAreas,
};