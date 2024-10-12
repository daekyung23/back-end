const userRepository = require('../repositories/user-repository');
const { isValid, toValidate, validateFields } = require('../utils/validation'); 

/**--------------------------------------------------------------------------
 * 사용자를 검색합니다.
 * @param {Express.Request} req      
 * @param {UserSearchQuery} req.query 
 * @param {Express.Response} res    
 * 
 * @typedef {Object} UserSearchQuery 
 * @property {string} [searchTerms]   - 검색어 default ''
 * @property {number} [page]          - 페이지 번호 default 1
 * @property {string} [isActive]      - 활성 상태 default 'ALL'
 */
const searchUser = async (req, res) => {
  let { searchTerms, page, is_active} = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);

  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await userRepository.searchUser(searchTerms, is_active, offset, pageSize);
    const rowCounts = await userRepository.searchUserCount(searchTerms, is_active);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ users: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error });
  }
};

/**--------------------------------------------------------------------------
 * 로그인 ID의 중복 여부를 확인합니다.
 * @param {Express.Request} req             
 * @param {UserDuplicateCheckQuery} req.query 
 * @param {Express.Response} res             
 * 
 * @typedef {Object} UserDuplicateCheckQuery
 * @property {string} loginId - 확인할 로그인 ID
 */
const checkDuplicateLoginId = async (req, res) => {
  const { login_id } = req.query;
  if (!isValid(login_id)) {
    return res.status(400).json({ message: 'Missing login_id' });
  }

  try {
    const exists = await userRepository.checkDuplicateLoginId(login_id);
    res.json(exists);
  } catch (error) {
    res.status(500).json({ error: 'Error checking duplicate login_id' });
  }
};

/**--------------------------------------------------------------------------
 * 새로운 사용자를 생성합니다.
 * @param {Express.Request} req          
 * @param {UserCreateBody} req.body     
 * @param {Express.Response} res      
 * 
 * @typedef {Object} UserCreateBody         
 * @property {string} login_id                - 로그인 ID 
 * @property {string} user_name               - 이름
 * @property {string} password                - 비밀번호
 * @property {number} dept_id                 - 부서 ID
 * @property {number} position_id             - 직위 ID
 * @property {string|null} [mobile_num]       - 휴대폰 번호 (default: null in DB)
 * @property {string|null} [office_num]       - 사무실 번호 (default: null in DB)
 * @property {string|null} [email]            - 이메일 (default: null in DB)
 * @property {number|null} [approval_role_id] - 승인 권한 ID (default: null in DB)
 * @property {string} [permission]            - 권한 ('user', 'manager', 'admin', default: 'user' in DB)
 */
const createUser = async (req, res) => {
  const {
    user_name,
    login_id,
    password,
    dept_id,
    position_id,
    ...optionalFields
  } = req.body;

  const requiredFields = { user_name, login_id, password, dept_id, position_id };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  const user = { ...requiredFields, ...optionalFields };

  try {
    const result = await userRepository.createUser(user);
    res.status(201).json(result); // 성공적인 생성 시 201 상태 코드 반환
  } catch (error) {
    console.error('Error creating user:', error); // 에러 로그
    res.status(500).json({ error: 'Failed to create user' });
  }
};

/**--------------------------------------------------------------------------
 * 사용자 정보를 업데이트합니다.
 * @param {Express.Request} req         
 * @param {UserUpdateBody} req.body 
 * @param {Express.Response} res       
 * 
 * @typedef {Object} UserUpdateBody     
 * @property {string} login_id                - 로그인 ID (기준)
 * @property {string} [user_name]             - 이름
 * @property {string} [password]              - 비밀번호
 * @property {number} [dept_id]               - 부서 ID
 * @property {number} [position_id]           - 직위 ID
 * @property {string|null} [mobile_num]       - 휴대폰 번호
 * @property {string|null} [office_num]       - 사무실 번호
 * @property {string|null} [email]            - 이메일
 * @property {number|null} [approval_role_id] - 승인 권한 ID
 * @property {string} [permission]            - 권한 ('user', 'manager', 'admin')
 * @property {number} [is_active]             - 활성 상태 (1: 활성, 0: 비활성)
 */
const updateUser = async (req, res) => {
  const { login_id, ...updateFields } = req.body;

  if (!isValid(login_id)) {
    return res.status(400).json({ error: 'Missing login_id' });
  }

  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  // 수정된 시간 추가
  updateFields.modified_at = new Date().toISOString();

  try {
    const result = await userRepository.patchUser(login_id, updateFields);
    res.json(result);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

/**--------------------------------------------------------------------------
 * 사용자의 활성 상태를 변경합니다.
 * @param {Express.Request} req               
 * @param {UserActivationChangeBody} req.body 
 * @param {Express.Response} res              
 * 
 * @typedef {Object} UserActivationChangeBody
 * @property {string} loginId  - 로그인 ID (기준)
 * @property {number} isActive - 새로운 활성 상태 (1: 활성, 0: 비활성)
 */
const changeUserActivation = async (req, res) => {
  const { login_id, is_active } = req.body;
  const user = { is_active };
  try {
    const result = await userRepository.patchUser(login_id, user);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

/**--------------------------------------------------------------------------
 * 사용자를 삭제합니다.
 * @param {Express.Request} req       
 * @param {UserDeleteQuery} req.query
 * @param {Express.Response} res      
 * 
 * @typedef {Object} UserDeleteQuery  
 * @property {string} loginId - 삭제할 사용자의 로그인 ID  
 */
const deleteUser = async (req, res) => {
  const { login_id } = req.query;
  if (!isValid(login_id)) {
    return res.status(400).json({ error: 'Missing login_id' });
  }

  try {
    const result = await userRepository.deleteUser(login_id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
}


module.exports = {
  searchUser,
  checkDuplicateLoginId,
  createUser,
  updateUser,
  changeUserActivation,
  deleteUser,
};
