const userRepository = require('../repositories/user-repository');
const { isValid, toValidate, isUndefined } = require('../utils/validation'); 

const searchUser = async (req, res) => {
  let { searchTerms, isActive, page} = req.query;
  searchTerms = toValidate(searchTerms, '');
  isActive = toValidate(isActive);
  switch (isActive) {
    case 'Y':
      isActiveValue = 1;
      break;
    case 'N':
      isActiveValue = 0;
      break;
    default:
      isActiveValue = null;
  }

  page = toValidate(page, 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await userRepository.searchUser(searchTerms, isActiveValue, offset, pageSize);
    const rowCounts = await userRepository.searchUserCount(searchTerms, isActiveValue);
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

  // Check required fields
  for (const [field, value] of Object.entries(requiredFields)) {
    if (!isValid(value)) {
      return res.status(400).json({ error: `${field} is required and cannot be null or undefined.` });
    }
  }

  // 비밀번호 해시화
  // const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    user_name,
    login_id,
    password, //:hashedPassword, // 해시화된 비밀번호 저장
    dept_id,
    position_id,
    ...optionalFields
  };

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
  // updateField에 password가 포함되어 있으면 암호화
  // if (updateFields.password) {
  //   updateFields.password = bcrypt.hashSync(updateFields.password, 10);
  // }

  try {
    const result = await userRepository.patchUser(login_id, updateFields);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
}

const changeUserActivation = async (req, res) => {
  const { login_id, isActive } = req.body;
  const user = { isActive };
  try {
    const result = await userRepository.patchUser(login_id, user);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};


module.exports = {
  searchUser,
  checkDuplicateLoginId,
  createUser,
  updateUser,
  changeUserActivation,
};
