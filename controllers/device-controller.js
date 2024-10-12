const deviceRepository = require('../repositories/device-repository');
const { isValid, toValidate, validateFields } = require('../utils/validation'); 

const searchDevice = async (req, res) => {
  let { searchTerms, page } = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await deviceRepository.searchDevice(searchTerms, offset, pageSize);
    const rowCounts = await deviceRepository.searchDeviceCount(searchTerms);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ devices: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching devices', error });
  }
};

// const checkDuplicateLoginId = async (req, res) => {
//   const { login_id } = req.params;
//   try {
//     const exists = await userRepository.checkDuplicateLoginId(login_id);
//     res.json(exists);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to check login_id' });
//   }
// };

const createDevice = async (req, res) => {
  const {
    device_model_id,
    owner_dept_id,
    mgmt_dept_id,
    serial,
    mac,
    ...optionalFields
  } = req.body;

  const requiredFields = { device_model_id, owner_dept_id, mgmt_dept_id, serial, mac };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  const device = { ...requiredFields, ...optionalFields };

  try {
    const result = await deviceRepository.createDevice(device);
    res.status(201).json(result); // 성공적인 생성 시 201 상태 코드 반환
  } catch (error) {
    console.error('Error creating device:', error); // 에러 로그
    res.status(500).json({ error: 'Failed to create device' });
  }
};

const updateDevice = async (req, res) => {
  const { device_id, ...updateFields } = req.body;
  if (!isValid(device_id)) {
    return res.status(400).json({ error: 'Missing device_id' });
  }
  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  try {
    const result = await deviceRepository.patchDevice(device_id, updateFields);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update device' });
  }
}

const changeDeviceStatus = async (req, res) => {
  const { device_id, status_id } = req.body;
  const device = { status_id };
  try {
    const result = await deviceRepository.patchDevice(device_id, device);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update device' });
  }
};

const deleteDevice = async (req, res) => {
  const { device_id } = req.query;
  if (!isValid(device_id)) {
    return res.status(400).json({ error: 'Missing device_id' });
  }

  try {
    await deviceRepository.deleteDevice(device_id);
    res.json({ message: 'Device deleted' });
  } catch (error) {
    console.error('Error in deleteDevice controller:', error);
    res.status(500).json({ error: 'Failed to delete device' });
  }
}

module.exports = {
  searchDevice,
  createDevice,
  updateDevice,
  changeDeviceStatus,
  deleteDevice,
};
