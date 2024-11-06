const deviceDriverRepository = require('../repositories/device-driver-repository');
const { toValidate, validateFields, isValid } = require('../utils/validation');

const searchDeviceDriver = async (req, res) => {
  let { searchTerms, page } = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await deviceDriverRepository.searchDeviceDriver(searchTerms, offset, pageSize);
    const rowCounts = await deviceDriverRepository.searchDeviceDriverCount(searchTerms);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ deviceDrivers: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching device drivers', error });
  }
};

const checkDuplicateDeviceDriver = async (req, res) => {
  const { device_model_id, printer_language } = req.query;
  if (!isValid(device_model_id) || !isValid(printer_language)) {
    return res.status(400).json({ message: 'Missing device_model_id or printer_language' });
  }

  try {
    const exists = await deviceDriverRepository.checkDuplicateDeviceDriver(device_model_id, printer_language);
    res.json(exists);
  } catch (error) {
    res.status(500).json({ message: 'Error checking duplicate device driver', error });
  }
}

const createDeviceDriver = async (req, res) => {
  const { 
    device_model_id , 
    manufacturer,
    printer_language,
    install_file_address,
    ...optionalFields
  } = req.body;

  const requiredFields = { 
    device_model_id , 
    manufacturer,
    printer_language,
    install_file_address,
   };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  if(await deviceDriverRepository.checkDuplicateDeviceDriver(device_model_id, printer_language)) {
    return res.status(400).json({ message: 'Duplicate device driver' });
  }
  const driver = { ...requiredFields, ...optionalFields };

  try {
    const newDriver = await deviceDriverRepository.createDeviceDriver(driver);
    res.json(newDriver);
  } catch (error) {
    res.status(500).json({ message: 'Error creating device driver', error });
  }
};
  
const updateDeviceDriver = async (req, res) => {
  const { device_driver_id, ...updateFields } = req.body;
  if (!isValid(device_driver_id)) {
    return res.status(400).json({ message: 'Missing driver_id' });
  }

  try {
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const updatedDriver = await deviceDriverRepository.patchDeviceDriver(device_driver_id, updateFields);
    res.json(updatedDriver);
  } catch (error) {
    res.status(500).json({ message: 'Error updating device driver', error });
  }
};

const deleteDeviceDriver = async (req, res) => {
  const { device_driver_id } = req.query;
  if (!isValid(device_driver_id)) {
    return res.status(400).json({ message: 'Missing device_driver_id' });
  }

  try {
    const deletedDriver = await deviceDriverRepository.deleteDeviceDriver(device_driver_id);
    res.json(deletedDriver);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting device driver', error });
  }
}

module.exports = {
  searchDeviceDriver,
  checkDuplicateDeviceDriver,
  createDeviceDriver,
  updateDeviceDriver,
  deleteDeviceDriver,
};
