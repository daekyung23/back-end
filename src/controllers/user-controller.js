const { Schema, String, Natural, Binary, Email, Enum } = require('../../utils/validation/custom-zod-types');
const { Search } = require('../models/search');
const userRepository = require('../../repositories/user-repository');

const User = Schema({
  login_id: String.min(5).max(20), // 최소 5자, 최대 20자
  user_name: String.min(1).max(45), // 최소 1자, 최대 45자
  password: String.min(4).max(50), // 최소 6자, 최대 50자
  dept_id: Natural, // 필수 필드
  position_id: Natural, // 필수 필드
  mobile_num: String.max(20).optional().nullable(), // 기본적으로 null 허용
  office_num: String.max(20).optional().nullable(), // 기본적으로 null 허용
  email: Email.max(100).optional().nullable(), // 기본적으로 null 허용
  approval_role_id: Natural.optional(), // 선택 사항, 기본적으로 null 허용
  permission: Enum(['user', 'manager', 'admin']).optional(), // 기본적으로 'user'로 설정
  is_active: Enum(['Y', 'N']).optional(), // 문자열로 'Y' 또는 'N'을 받음
});

const searchUser = async (req, res) => {
  const UserSearch = Search.extend({
    isActive: Binary.optional(), // default: 전부
  })
  
  const input = UserSearch.parse(req.query);
  const { page, ...condition } = input;
  const pageSize = 10;
  const pagination = { pageSize, offset: (page - 1) * pageSize }

  const users = await userRepository.searchUser(condition, pagination);
  const userCounts = await userRepository.searchUserCount(condition);
  const totalPages = Math.ceil(userCounts / pageSize);
  res.json({ users, totalPages });
};

const checkDuplicateLoginId = async (req, res) => {
  try {
    const input = User.pick({ login_id: true }).parse(req.query);
    const exists = await userRepository.checkDuplicateLoginId(input.login_id);
    res.json({ isDuplicate: exists });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    res.status(500).json({ message: 'Error checking duplicate login ID', error });
  }
};

const createUser = async (req, res) => {
  const input = User.parse(req.body);
  if (await userRepository.checkDuplicateLoginId(input.login_id)) {
    return res.status(400).json({ message: 'Duplicate login_id' });
  }
  const result = await userRepository.createUser(input);
  res.status(201).json(result);
};

const updateUser = async (req, res) => {
  try {
    const { user_id, is_active, ...updateFields } = req.body;

    // 유효성 검사 및 변환 로직
    if (!user_id || typeof user_id !== 'number') {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    // is_active 값을 'Y', 'N'에서 1, 0으로 변환
    if (is_active === 'Y') {
      updateFields.is_active = 1;
    } else if (is_active === 'N') {
      updateFields.is_active = 0;
    } else {
      return res.status(400).json({ message: 'Invalid is_active value' });
    }

    // 필수 필드 존재 여부 체크 (예시)
    if (!updateFields.user_name || !updateFields.dept_id || !updateFields.position_id) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    updateFields.modified_at = new Date()

    // 데이터베이스 업데이트
    const result = await userRepository.patchUser(user_id, updateFields);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};




const deleteUser = async (req, res) => {
  const input = User.pick({ login_id: true }).parse(req.query);
  const result = await userRepository.deleteUser(input.login_id);
  res.json(result);
}

module.exports = {
  searchUser,
  checkDuplicateLoginId,
  createUser,
  updateUser,
  //changeUserActivation,
  deleteUser,
};
