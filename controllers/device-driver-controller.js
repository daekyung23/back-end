const deviceDriverRepository = require('../repositories/device-driver-repository');

const searchDeviceDriver = async (req, res) => {
  const { searchTerms = '', page = 1 } = req.query; // 기본 페이지 번호는 1
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    // 디바이스 드라이버 검색
    const rows = await deviceDriverRepository.searchDeviceDriver(searchTerms, offset, pageSize);

    // 검색된 디바이스 드라이버의 총 개수 검색
    const totalDrivers = await deviceDriverRepository.searchDeviceDriverCount(searchTerms);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalDrivers / pageSize);

    // 결과 반환 (디바이스 드라이버 목록과 총 페이지 수 포함)
    res.json({ deviceDrivers: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching device drivers', error });
  }
};

module.exports = {
  searchDeviceDriver,
};
