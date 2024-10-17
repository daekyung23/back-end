const deviceModelRepository = require('../repositories/device-model-repository');
const { toValidate, validateFields, isValid } = require('../utils/validation');
const DBHelper = require('../utils/db-helper');

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
    const { model_name, manufacturer, color_support, ...optionalFields } = req.body;

    const requiredFields = { model_name, manufacturer, color_support };
    const validationError = validateFields(requiredFields, res);
    if (validationError) return validationError;
    if (await deviceModelRepository.checkDuplicateDeviceModel(model_name)) {
      return res.status(400).json({ message: 'Duplicate login_id' });
    }
    const model= { ...requiredFields, ...optionalFields };
    
  try {
    const result = await deviceModelRepository.createDeviceModel(model);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating device model:', error);
    res.status(500).json({ error: 'Error creating device model'});
  }
};

const updateDeviceModel = async (req, res) => {
  const { device_model_id, ...updateFields } = req.body;

  if (!isValid(device_model_id)) {
    return res.status(400).json({ error: 'Missing login_id' });
  }

  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  try {
    const result = await deviceModelRepository.patchDeviceModel(device_model_id, updateFields);
    res.json(result);
  } catch (error) {
    console.error('Error updating device model:', error);
    res.status(500).json({ error: 'Failed to update device model' });
  }
}

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
