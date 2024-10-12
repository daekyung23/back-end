const userPositionRepository = require('../repositories/user-position-repository');
const { isValid } = require('../utils/validation');

const getAllUserPositions = async (req, res) => {
  try {
    const rows = await userPositionRepository.getAllUserPositions();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error });
  }
};

const deleteUserPosition = async (req, res) => {
  const { user_position_id } = req.query;
  if (!isValid(user_position_id)) {
    return res.status(400).json({ message: 'Missing user_position_id' });
  }

  try {
    const deletedPosition = await userPositionRepository.deleteUserPosition(user_position_id);
    res.json(deletedPosition);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user position', error });
  }
};

module.exports = {
  getAllUserPositions,
  deleteUserPosition,
};
