const { Object, String, Natural, Binary, Email, Enum } = require('../utils/custom-zod-types');
const { Search } = require('../models/search');
const userRepository = require('../repositories/user-repository');

const User = Object({
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
  is_active: Binary.optional(), // default: 1
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
  const input = User.pick({ login_id: true }).parse(req.query);
  const exists = await userRepository.checkDuplicateLoginId(input.login_id);
  res.json(exists);
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
  const UpdateUser = User.pick({ login_id: true }).merge(
    User.partial()
  );

  const input = UpdateUser.parse(req.body);
  const { login_id, ...updateFields } = input;
  updateFields.modified_at = new Date().toISOString();
  const result = await userRepository.patchUser(login_id, updateFields);
  res.json(result);
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
