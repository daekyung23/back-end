const warehouseRepository = require('../repositories/warehouse-repository');

const searchWarehouse = async (req, res) => {
  const { searchTerms = '', page = 1 } = req.query; // 기본 페이지 번호는 1
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    // 창고 검색
    const rows = await warehouseRepository.searchWarehouse(searchTerms, offset, pageSize);

    // 검색된 창고의 총 개수 검색
    const totalWarehouses = await warehouseRepository.searchWarehouseCount(searchTerms);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalWarehouses / pageSize);

    // 결과 반환 (창고 목록과 총 페이지 수 포함)
    res.json({ warehouses: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching warehouses', error });
  }
};

module.exports = {
  searchWarehouse,
};
