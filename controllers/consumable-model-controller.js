const consumableModel = require('../repositories/consumable-model-repository');

const searchConsumableModel = async (req, res) => {
  const { searchTerms, consumableType, page = 1 } = req.query; // 기본 페이지 번호는 1
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    const rows = await consumableModel.searchConsumableModel(searchTerms, consumableType, offset, pageSize);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching consumable models', error });
  }
};

module.exports = {
  searchConsumableModel,
};