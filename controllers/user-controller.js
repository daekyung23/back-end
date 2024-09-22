const userRepository = require('../repositories/user-repository');

const searchUser = async (req, res) => {
  const { searchTerms = '', isActive = 'Y', page = 1 } = req.query;
  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  // 'ALL'이 아니면 활성 상태 조건을 적용, 'ALL'이면 조건을 추가하지 않음
  const isActiveValue = isActive === 'ALL' ? null : (isActive === 'Y' ? 1 : 0);

  try {
    // 검색된 유저 리스트 가져오기
    const rows = await userRepository.searchUser(searchTerms, isActiveValue, offset, pageSize);

    // 검색된 총 유저 수 가져오기
    const totalUsers = await userRepository.searchUserCount(searchTerms, isActiveValue);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(totalUsers / pageSize);

    // 결과 반환 (유저 목록과 총 페이지 수 포함)
    res.json({ users: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error });
  }
};

module.exports = {
  searchUser,
};
