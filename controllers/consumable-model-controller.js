const consumableModelRepository = require('../repositories/consumable-model-repository');
const deviceConsumableCompatibilityRepository = require('../repositories/device-consumable-compatibility-repository');
const { isValid, toValidate, validateFields } = require('../utils/validation');
const DBHelper = require('../utils/DBHelper');

const searchConsumableModel = async (req, res) => {
  let { searchTerms, consumableType, page} = req.query; // 기본 페이지 번호 1
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    const rows = await consumableModelRepository.searchConsumableModel(searchTerms, consumableType, offset, pageSize);
    const rowCounts = await consumableModelRepository.searchConsumableModelCount(searchTerms, consumableType);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ consumableModels: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching consumable models', error });
  }
};

const checkDuplicateConsumableModel = async (req, res) => {
  const { consumable_name } = req.query;
  if (!isValid(consumable_name)) {
    return res.status(400).json({ message: 'Missing consumable_name' });
  }

  try {
    const exists = await consumableModelRepository.checkDuplicateConsumableModel(consumable_name);
    res.json(exists);
  } catch (error) {
    res.status(500).json({ message: 'Error checking duplicate consumable model', error });
  }
};

const createConsumableModel = async (req, res) => {
  const {
    manufacturer,
    consumable_name,
    consumable_type,
    device_model_id_array
  } = req.body;

  const requiredFields = { manufacturer, consumable_name, consumable_type };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  if(await consumableModelRepository.checkDuplicateConsumableModel(consumable_name)) {
    return res.status(400).json({ message: 'Duplicate consumable model' });
  }
  const consumableModel = { ...requiredFields };

  try {
    const connection = await DBHelper.beginTransaction();
    const createdConsumableModel = await consumableModelRepository.createConsumableModel(consumableModel);
    const result = await deviceConsumableCompatibilityRepository.createAllDeviceConsumableCompatibility(createdConsumableModel.consumable_model_id, device_model_id_array);
    await DBHelper.commit(connection);

    res.status(201).json({createdConsumableModel, result}); // 성공적인 생성 시 201 상태 코드 반환
  } catch (error) {
    await DBHelper.rollback(connection);
    res.status(500).json({ error: 'Failed to create consumable model' });
  }
}

const updateConsumableModel = async (req, res) => {
  const { consumable_model_id, ...updateFields } = req.body;
  if (!isValid(consumable_model_id)) {
    return res.status(400).json({ message: 'Missing consumable_model_id' });
  }

  try {
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const connection = await DBHelper.beginTransaction();
    const updatedConsumableModel = await consumableModelRepository.patchConsumableModel(consumable_model_id, updateFields);
    const result = await deviceConsumableCompatibilityRepository.deleteAllDeviceConsumableCompatibilityByConsumableModelId(consumable_model_id);
    const result2 = await deviceConsumableCompatibilityRepository.createAllDeviceConsumableCompatibility(consumable_model_id, req.body.device_model_id_array);
    await DBHelper.commit(connection);
    res.json({updatedConsumableModel, result2});
  } catch (error) {
    await DBHelper.rollback(connection);
    console.error('Error in updateConsumableModel controller:', error);
    res.status(500).json({ message: 'Error updating consumable model', error });
  }
}

const deleteConsumableModel = async (req, res) => {
  const { consumable_model_id } = req.query;
  if (!isValid(consumable_model_id)) {
    return res.status(400).json({ message: 'Missing consumable_model_id' });
  }

  try {
    DBHelper.beginTransaction();
    await deviceConsumableCompatibilityRepository.deleteAllDeviceConsumableCompatibilityByConsumableModelId(consumable_model_id);
    await consumableModelRepository.deleteConsumableModel(consumable_model_id);
    DBHelper.commit();
    res.json({ message: 'Consumable model deleted' });
  } catch (error) {
    console.error('Error in deleteConsumableModel controller:', error);
    res.status(500).json({ message: 'Error deleting consumable model', error });
  }
}

module.exports = {
  searchConsumableModel,
  checkDuplicateConsumableModel,
  createConsumableModel,
  updateConsumableModel,
  deleteConsumableModel,
};
