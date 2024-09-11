const deviceModelRepository = require('../repositories/device-model-repository');

const searchDeviceModel = async (req, res) => {
  const { searchTerms, page = 1 } = req.query; // 기본 페이지 번호는 1
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    const rows = await deviceModelRepository.searchDeviceModel(searchTerms, offset, pageSize);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching device models', error });
  }
};

module.exports = {
  searchDeviceModel,
};