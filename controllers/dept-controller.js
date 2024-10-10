const deptRepository = require('../repositories/dept-repository');
const { toValidate } = require('../utils/validation');

// 재귀 함수를 통해 상위 부서 계층 정보를 추출하고 JSON 형식으로 반환하는 함수
const getHierarchy = (row, rows) => {
  let hierarchy = [];
  let currentRow = row;

  while (currentRow && currentRow.parent_dept_id) {
    const parent = rows.find(r => r.dept_id === currentRow.parent_dept_id);
    if (parent) {
      hierarchy.unshift(parent.dept_name);
    }
    currentRow = parent;
  }

  const hierarchyObject = {};
  hierarchy.forEach((name, index) => {
    hierarchyObject[`dept_${index + 1}`] = name;
  });

  hierarchyObject[`dept_${hierarchy.length + 1}`] = row.dept_name;

  return hierarchyObject;
};

const searchDept = async (req, res) => {
  let { searchTerms, page } = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);

  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    const rows = await deptRepository.getAllDept();

    // 모든 부서에 대해 계층 정보를 추출하여 JSON 생성
    const allHierarchies = rows.map(row => {
      const hierarchy = getHierarchy(row, rows);
      return {
        dept_id: row.dept_id,
        ...hierarchy
      };
    });

    // 검색어 필터링 적용 (검색어가 존재할 경우)
    const filteredRows = searchTerms
      ? allHierarchies.filter(row => 
          Object.values(row).some(value => typeof value === 'string' && value.includes(searchTerms))
        )
      : allHierarchies;

    // 총 페이지 수 계산
    const rowCounts = filteredRows.length;
    const totalPages = Math.ceil(rowCounts / pageSize);

    // 페이지네이션 적용
    const paginatedRows = filteredRows.slice(offset, offset + pageSize);

    // 결과 반환 (부서 목록과 총 페이지 수)
    res.json({
      depts: paginatedRows,
      totalPages
    });
  } catch (error) {
    res.status(500).json({ message: 'Error searching depts', error });
  }
};

module.exports = {
  searchDept,
};
