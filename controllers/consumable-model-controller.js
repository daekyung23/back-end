const consumableModel = require('../repositories/consumable-model-repository');

const searchConsumableModel = async (req, res) => {
  const { searchTerms = '', consumableType = '', page = 1 } = req.query; // 기본 페이지 번호 1
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    // 소모품 모델 리스트 검색
    const rows = await consumableModel.searchConsumableModel(searchTerms, consumableType, offset, pageSize);

    // 소모품 모델 총 개수 검색
    const totalModels = await consumableModel.searchConsumableModelCount(searchTerms, consumableType);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalModels / pageSize);

    // 결과 반환 (모델 리스트와 총 페이지 수 포함)
    res.json({ consumableModels: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching consumable models', error });
  }
};

module.exports = {
  searchConsumableModel,
};
