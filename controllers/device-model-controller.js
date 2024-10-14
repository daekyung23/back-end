const deviceModelRepository = require('../repositories/device-model-repository');
const { toValidate } = require('../utils/validation');

const searchDeviceModel = async (req, res) => {
  let { searchTerms, page } = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);

  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await deviceModelRepository.searchDeviceModel(searchTerms, offset, pageSize);
    const totalModels = await deviceModelRepository.searchDeviceModelCount(searchTerms);
    const totalPages = Math.ceil(totalModels / pageSize);
    res.json({ models: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching device models', error });
  }
};

const createDeviceModel = async (req, res) => {
  try {
    const { model_name, manufacturer, color_support } = req.body;

    if (!model_name || !manufacturer) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    const newModel = await deviceModelRepository.createDeviceModel(req.body);
    res.status(201).json({ message: 'Device model created successfully', data: newModel });
  } catch (error) {
    console.error('Error creating device model:', error);
    res.status(500).json({ message: 'Error creating device model', error });
  }
};

const updateDeviceModel = async (req, res) => {
  try {
    const { device_model_id, model_name, manufacturer, color_support } = req.body;
    console.log(color_support);
    if (!device_model_id || !model_name || !manufacturer || typeof color_support === 'undefined') {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const updatedModel = await deviceModelRepository.updateDeviceModel(req.body);
    res.status(200).json({ message: 'Device model updated successfully', data: updatedModel });
  } catch (error) {
    console.error('Error updating device model:', error);
    res.status(500).json({ message: 'Error updating device model', error });
  }
};

const checkDuplicateDeviceModel = async (req, res) => {
  const { model_name } = req.query;
  if (!model_name) {
    return res.status(400).json({ message: 'Missing device_model_name' });
  }

  try {
    const exists = await deviceModelRepository.checkDuplicateDeviceModel(model_name);
    res.json(exists);
  } catch (error) {
    res.status(500).json({ message: 'Error checking duplicate device model', error });
  }
};

const deleteDeviceModel = async (req, res) => {
  const { device_model_id } = req.query;
  if (!device_model_id) {
    return res.status(400).json({ message: 'Missing device_model_id' });
  }

  try {
    const deletedModel = await deviceModelRepository.deleteDeviceModel(device_model_id);
    res.json(deletedModel);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting device model', error });
  }
};

const getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await deviceModelRepository.getAllManufacturers();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving manufacturers', error });
  }
};

const getModelsByManufacturer = async (req, res) => {
  const { manufacturer } = req.query;
  if (!manufacturer) {
    return res.status(400).json({ message: 'Missing manufacturer' });
  }

  try {
    const models = await deviceModelRepository.getModelsByManufacturer(manufacturer);
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving models', error });
  }
};

module.exports = {
  searchDeviceModel,
  checkDuplicateDeviceModel,
  createDeviceModel,
  updateDeviceModel,
  deleteDeviceModel,
  getAllManufacturers,
  getModelsByManufacturer,
};
