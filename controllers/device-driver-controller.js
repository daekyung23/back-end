const deviceDriverRepository = require('../repositories/device-driver-repository');
const { toValidate } = require('../utils/validation');

const searchDeviceDriver = async (req, res) => {
  let { searchTerms, page} = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await deviceDriverRepository.searchDeviceDriver(searchTerms, offset, pageSize);
    const rowCounts = await deviceDriverRepository.searchDeviceDriverCount(searchTerms);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ deviceDrivers: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching device drivers', error });
  }
};

module.exports = {
  searchDeviceDriver,
};
