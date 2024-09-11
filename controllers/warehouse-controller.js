const warehouseRepository = require('../repositories/warehouse-repository');

const searchWarehouse = async (req, res) => {
  const { searchTerms, page = 1 } = req.query; // 기본 페이지 번호는 1
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    const rows = await warehouseRepository.searchWarehouse(searchTerms, offset, pageSize);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching warehouses', error });
  }
};

module.exports = {
  searchWarehouse,
};