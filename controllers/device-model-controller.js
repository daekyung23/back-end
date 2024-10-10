const deviceModelRepository = require('../repositories/device-model-repository');
const { toValidate } = require('../utils/validation');

const searchDeviceModel = async (req, res) => {
  let { searchTerms, page} = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);

  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await deviceModelRepository.searchDeviceModel(searchTerms, offset, pageSize);
    const totalModels = await deviceModelRepository.searchDeviceModelCount(searchTerms);
    const totalPages = Math.ceil(totalModels / pageSize);
    res.json({ models: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching device models', error });
  }
};

module.exports = {
  searchDeviceModel,
};
