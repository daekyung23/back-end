// controllers/dept-controller.js
const deptRepository = require('../repositories/dept-repository');

// 재귀 함수를 통해 상위 부서 계층 정보를 추출하고 JSON 형식으로 반환하는 함수
const getHierarchy = (row, rows) => {
  // 상위 부서를 추적하기 위한 배열
  let hierarchy = [];
  let currentRow = row;

  // 상위 부서들을 계속 추적하여 배열에 추가
  while (currentRow && currentRow.parent_dept_id) {
    const parent = rows.find(r => r.dept_id === currentRow.parent_dept_id);
    if (parent) {
      hierarchy.unshift(parent.dept_name); // 최상위가 항상 앞에 오도록
    }
    currentRow = parent;
  }

  // 계층을 dept_1, dept_2, ... 형식으로 변환
  const hierarchyObject = {};
  hierarchy.forEach((name, index) => {
    hierarchyObject[`dept_${index + 1}`] = name;
  });

  // 현재 부서명을 마지막에 추가
  hierarchyObject[`dept_${hierarchy.length + 1}`] = row.dept_name;

  return hierarchyObject;
};

const searchDept = async (req, res) => {
  const { searchTerms, page = 1 } = req.query; // 기본 페이지 번호는 1
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

    // 페이지네이션 적용
    const paginatedRows = filteredRows.slice(offset, offset + pageSize);

    res.json(paginatedRows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching depts', error });
  }
};

module.exports = {
  searchDept,
};
