const deviceRepository = require('../repositories/device-repository');
const { isValid, toValidate, validateFields } = require('../utils/validation'); 

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
  createDevice,
  deleteDevice,
};
