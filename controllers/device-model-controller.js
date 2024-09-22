const deviceModelRepository = require('../repositories/device-model-repository');

const searchDeviceModel = async (req, res) => {
  const { searchTerms = '', page = 1 } = req.query; // 기본 페이지 번호는 1
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    // 디바이스 모델 검색
    const rows = await deviceModelRepository.searchDeviceModel(searchTerms, offset, pageSize);

    // 검색된 디바이스 모델의 총 개수 검색
    const totalModels = await deviceModelRepository.searchDeviceModelCount(searchTerms);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalModels / pageSize);

    // 결과 반환 (디바이스 모델 목록과 총 페이지 수 포함)
    res.json({ models: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching device models', error });
  }
};

module.exports = {
  searchDeviceModel,
};
