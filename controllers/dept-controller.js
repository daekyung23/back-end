const deptRepository = require('../repositories/dept-repository');
const { isValid, isUndefined, toValidate, validateFields } = require('../utils/validation');

// 재귀 함수를 통해 상위 부서 계층 정보를 추출하고 JSON 형식으로 반환하는 함수
const getHierarchy = (row, deptMap) => {//rows) => {
  let hierarchy = [];
  let currentRow = row;

  // 상위 부서 탐색
  while (currentRow && currentRow.parent_dept_id) {
    const parent = deptMap[currentRow.parent_dept_id];
    if (parent) {
      hierarchy.unshift({ id: parent.dept_id, name: parent.dept_name });
    }
    currentRow = parent;
  }
  // while (currentRow && currentRow.parent_dept_id) {
  //   const parent = rows.find(r => r.dept_id === currentRow.parent_dept_id);
  //   if (parent) {
  //     hierarchy.unshift(parent.dept_name);
  //   }
  //   currentRow = parent;
  // }

  // const hierarchyObject = {};
  // hierarchy.forEach((name, index) => {
  //   hierarchyObject[`dept_${index + 1}`] = name;
  // });

  // hierarchyObject[`dept_${hierarchy.length + 1}`] = row.dept_name;

  // 현재 부서 추가
  hierarchy.push({ id: row.dept_id, name: row.dept_name });

  // 계층 정보를 dept_n_id 및 dept_n으로 변환
  const hierarchyObject = { dept_id: row.dept_id };
  hierarchy.forEach((dept, index) => {
    const level = index + 1;
    hierarchyObject[`dept_${level}_id`] = dept.id;
    hierarchyObject[`dept_${level}`] = dept.name;
  });

  return hierarchyObject;
};

const searchDept = async (req, res) => {
  let { searchTerms, page } = req.query;
  searchTerms = toValidate( searchTerms, '');
  page = toValidate(page, 1);

  const pageSize = 10; // 페이지 크기 설정
  const offset = (page - 1) * pageSize; // 페이지네이션 로직

  try {
    const rows = await deptRepository.getAllDept();

    // dept_id를 키로 하는 매핑 객체 생성 (성능 최적화)
    const deptMap = {};
    rows.forEach(r => {
      deptMap[r.dept_id] = r;
    });

    // 모든 부서에 대해 계층 정보를 추출하여 JSON 생성
    const allHierarchies = rows.map(row => {
      const hierarchy = getHierarchy(row, deptMap);
      return hierarchy;
    });

    // 모든 부서에 대해 계층 정보를 추출하여 JSON 생성
    // const allHierarchies = rows.map(row => {
    //   const hierarchy = getHierarchy(row, rows);
    //   return {
    //     dept_id: row.dept_id,
    //     ...hierarchy
    //   };
    // });

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
    res.status(500).json({ 
      message: 'Error searching depts', 
      error: {
        message: error.message,
        stack: error.stack
      }
    });
  }
};

/**
 * 특정 부서 ID에 대한 하위 부서를 검색합니다.
 */
getChildrenById = async (req, res) => {
  const { dept_id } = req.query;
  if(isUndefined(dept_id)) {
    return res.status(400).json({ message: 'Missing dept_id' });
  }

  try {
    const childDepts = await deptRepository.getChildDeptById(dept_id);
    res.json(childDepts);
  } catch (error) {
    res.status(500).json({ message: 'Error getting child depts', error });
  }
};

checkDuplicateDept = async (req, res) => {
  const { parent_dept_id, dept_name } = req.query;
  if (!isValid(dept_name)) {
    return res.status(400).json({ message: 'Missing dept_name' });
  }

  try {
    const exists = await deptRepository.checkDuplicateDept(parent_dept_id, dept_name);
    res.json(exists);
  } catch (error) {
    res.status(500).json({ message: 'Error checking duplicate dept', error });
  }
}

createDept = async (req, res) => {
  const { dept_name, ...optionalFields } = req.body;
  const requiredFields = { dept_name };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  if(await deptRepository.checkDuplicateDept( parent_dept_id, dept_name)) {
    return res.status(400).json({ message: 'Duplicate dept_name' });
  }
  const dept = { ...requiredFields, ...optionalFields };

  try {
    const newDept = await deptRepository.createDept(dept);
    res.json(newDept);
  } catch (error) {
    res.status(500).json({ message: 'Error creating dept', error });
  }
}

updateDept = async (req, res) => {
  const { dept_id, ...updateFields } = req.body;
  if (!isValid(dept_id)) {
    return res.status(400).json({ message: 'Missing dept_id' });
  }

  try {
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const updatedDept = await deptRepository.patchDept(dept_id, updateFields);
    res.json(updatedDept);
  } catch (error) {
    res.status(500).json({ message: 'Error updating dept', error });
  }
}

deleteDept = async (req, res) => {
  const { dept_id } = req.query;
  if (!isValid(dept_id)) {
    return res.status(400).json({ message: 'Missing dept_id' });
  }

  try {
    const deletedDept = await deptRepository.deleteDept(dept_id);
    res.json(deletedDept);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting dept', error });
  }
};

module.exports = {
  searchDept,
  getChildrenById,
  createDept,
  updateDept,
  deleteDept,
};
