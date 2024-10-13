const warehouseRepository = require('../repositories/warehouse-repository');
const { toValidate, validateFields, isValid } = require('../utils/validation'); 

const searchWarehouse = async (req, res) => {
  let { searchTerms, page } = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);

  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await warehouseRepository.searchWarehouse(searchTerms, offset, pageSize);
    const totalWarehouses = await warehouseRepository.searchWarehouseCount(searchTerms);
    const totalPages = Math.ceil(totalWarehouses / pageSize);
    res.json({ warehouses: rows, totalPages });
  } catch (error) {
    console.error('Error in searchWarehouse controller:', error); // 컨트롤러에서의 에러 로그
    res.status(500).json({ message: 'Error searching warehouses', error });
  }
};

const checkDuplicateWarehouse = async (req, res) => {
  const { warehouse_name } = req.query;
  if (!isValid(warehouse_name)) {
    return res.status(400).json({ message: 'Missing warehouse_name' });
  }

  try {
    const exists = await warehouseRepository.checkDuplicateWarehouse(warehouse_name);
    res.json(exists);
  } catch (error) {
    res.status(500).json({ message: 'Error checking duplicate warehouse', error });
  }
}

const createWarehouse = async (req, res) => {
  const { warehouse_name, mgmt_dept_id } = req.body;
  const warehouse = { warehouse_name, mgmt_dept_id };
  const validationError = validateFields(warehouse, res);
  if (validationError) return validationError;

  try {
    const newLocation = await warehouseRepository.createWarehouse(warehouse);
    res.json(newLocation);
  } catch (error) {
    console.error('Error in createWarehouse controller:', error); // 컨트롤러에서의 에러 로그
    res.status(500).json({ message: 'Error creating warehouse', error });
  }
};

const updateWarehouse = async (req, res) => {
  const { warehouse_id, ...updateFields } = req.body;
  if (!isValid(warehouse_id)) {
    return res.status(400).json({ message: 'Missing warehouse_id' }); // warehouse_id가 없으면 에러 응답
  }

  try {
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const updatedWarehouse = await warehouseRepository.patchWarehouse(warehouse_id, updateFields);
    res.json(updatedWarehouse);
  } catch (error) {
    console.error('Error in patchWarehouse controller:', error); // 컨트롤러에서의 에러 로그
    res.status(500).json({ message: 'Error updating warehouse', error });
  }
};

const deleteWarehouse = async (req, res) => {
  const { warehouse_id } = req.query;
  if (!isValid(warehouse_id)) {
    return res.status(400).json({ message: 'Missing warehouse_id' });
  }

  try {
    const deletedWarehouse = await warehouseRepository.deleteWarehouse(warehouse_id);
    res.json(deletedWarehouse);
  } catch (error) {
    console.error('Error in deleteWarehouse controller:', error); // 컨트롤러에서의 에러 로그
    res.status(500).json({ message: 'Error deleting warehouse', error });
  }
};



module.exports = {
  searchWarehouse,
  checkDuplicateWarehouse,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
};
