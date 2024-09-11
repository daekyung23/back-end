const userRepository = require('../repositories/user-repository');

const searchUser = async (req, res) => {
  const { searchTerms = '', isActive = 'Y', page = 1 } = req.query; // 기본 검색어와 페이지 번호
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  // 'ALL'이 아니면 활성 상태 조건을 적용, 'ALL'이면 조건을 추가하지 않음
  const isActiveValue = isActive === 'ALL' ? null : (isActive === 'Y' ? 1 : 0);

  try {
    const rows = await userRepository.searchUser(searchTerms, isActiveValue, offset, pageSize);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error });
  }
};

module.exports = {
  searchUser,
};
