const userRepository = require('../repositories/user-repository');
const { isValid, toValidate, validateFields } = require('../utils/validation'); 

const searchUser = async (req, res) => {
  let { searchTerms, is_active, page} = req.query;
  searchTerms = toValidate(searchTerms, '');
  is_active = toValidate(is_active);
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

const updateUser = async (req, res) => {
  const { login_id, ...updateFields } = req.params;
  if (!isValid(login_id)) {
    return res.status(400).json({ error: 'Missing login_id' });
  }
  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({ error: 'No fields to update' });
  }

  try {
    const result = await userRepository.patchUser(login_id, updateFields);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
}

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

const deleteUser = async (req, res) => {
  const { login_id } = req.params;
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
