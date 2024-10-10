const consumableModel = require('../repositories/consumable-model-repository');
const { toValidate } = require('../utils/validation');

const searchConsumableModel = async (req, res) => {
  let { searchTerms, consumableType, page} = req.query; // 기본 페이지 번호 1
  searchTerms = toValidate(searchTerms, '');
  consumableType = toValidate(consumableType, '');
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

module.exports = {
  searchConsumableModel,
};
