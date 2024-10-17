const userRepository = require('../repositories/user-repository');
const { isValid, toValidate, validateFields } = require('../utils/validation'); 
const { Object, String, Natural, Binary, Email, Enum } = require('../utils/custom-zod-types');

const searchUser = async (req, res) => {
  const UserSearchQuery = Object({
    searchTerms: String.default(''),
    page: Natural.default(1),
    isActive: Binary.optional(), // default: 전부
  });
  
  const input = UserSearchQuery.parse(req.query);
  const { page, ...condition } = input;
  const pageSize = 10;
  const pagination = { pageSize, offset: (page - 1) * pageSize }

  const users = await userRepository.searchUser(condition, pagination);
  const userCounts = await userRepository.searchUserCount(condition);
  const totalPages = Math.ceil(userCounts / pageSize);
  res.json({ users, totalPages });
};

const checkDuplicateLoginId = async (req, res) => {
  const schema = Object({ login_id: String });
  const input = schema.parse(req.query);
  const exists = await userRepository.checkDuplicateLoginId(input.login_id);
  res.json(exists);
};

const UserCreateBody = Object({
  login_id: String.length(45),
  user_name: String.length(45),
  password: String.length(50),
  dept_id: Natural,
  position_id: Natural,
  mobile_num: String.length(20).optional(), // default: null  
  office_num: String.length(20).optional(), // default: null
  email: Email.length(100).optional(),  // default: null
  approval_role_id: Natural.optional(), // default: null
  permission: Enum(['user', 'manager', 'admin']).optional(), // default: 'user' 
});

const createUser = async (req, res) => {
  const input = UserCreateBody.parse(req.body);

  if (await userRepository.checkDuplicateLoginId(input.login_id)) {
    return res.status(400).json({ message: 'Duplicate login_id' });
  }
  const result = await userRepository.createUser(input);
  res.status(201).json(result);
};

const updateUser = async (req, res) => {
  const UserUpdateBody = UserCreateBody.partial().extend({
    login_id: String.length(45),
    is_active: Binary.optional(), // default: 1
  });
  const input = UserUpdateBody.parse(req.body);
  const { login_id, ...updateFields } = input;

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
 * @param {import('express').Request} req               
 * @param {UserActivationChangeBody} req.body 
 * @param {import('express').Response} res              
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
 * @param {import('express').Request} req       
 * @param {UserDeleteQuery} req.query
 * @param {import('express').Response} res      
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
