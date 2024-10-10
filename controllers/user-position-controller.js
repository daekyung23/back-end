const userPositionRepository = require('../repositories/user-position-repository');

const getAllUserPositions = async (req, res) => {
  try {
    const rows = await userPositionRepository.getAllUserPositions();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error });
  }
};

module.exports = {
  getAllUserPositions,
};
