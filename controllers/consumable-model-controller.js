const consumableModel = require('../repositories/consumable-model-repository');
const { toValidate, validateFields } = require('../utils/validation');

const searchConsumableModel = async (req, res) => {
  let { searchTerms, consumableType, page} = req.query; // 기본 페이지 번호 1
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    const rows = await consumableModel.searchConsumableModel(searchTerms, consumableType, offset, pageSize);
    const rowCounts = await consumableModel.searchConsumableModelCount(searchTerms, consumableType);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ consumableModels: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching consumable models', error });
  }
};

const createConsumableModel = async (req, res) => {
  const {
    manufacturer,
    consumable_name,
    consumable_type
  } = req.body;

  const requiredFields = { manufacturer, consumable_name, consumable_type };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  const consumableModel = { ...requiredFields };

  try {
    const result = await consumableModel.createConsumableModel(consumableModel);
    res.status(201).json(result); // 성공적인 생성 시 201 상태 코드 반환
  } catch (error) {
    console.error('Error creating consumable model:', error); // 에러 로그
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
    const updatedConsumableModel = await consumableModel.patchConsumableModel(consumable_model_id, updateFields);
    res.json(updatedConsumableModel);
  } catch (error) {
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
    await consumableModel.deleteConsumableModel(consumable_model_id);
    res.json({ message: 'Consumable model deleted' });
  } catch (error) {
    console.error('Error in deleteConsumableModel controller:', error);
    res.status(500).json({ message: 'Error deleting consumable model', error });
  }
}

module.exports = {
  searchConsumableModel,
  createConsumableModel,
  updateConsumableModel,
  deleteConsumableModel,
};
