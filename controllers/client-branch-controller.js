const clientBranchRepository = require('../repositories/client-branch-repository');
const { toValidate } = require('../utils/validation');

const searchClientBranch = async (req, res) => {
  let { searchTerms, is_active, page } = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await clientBranchRepository.searchClientBranch(searchTerms, is_active, offset, pageSize);
    const rowCounts = await clientBranchRepository.searchClientBranchCount(searchTerms, is_active);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ clientBranches: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching client branches', error });
  }
};

const createClientBranch = async (req, res) => {
  const {
    sigungu_id,
    mgmt_dept_id,
    client_id,
    client_branch_name,
    client_branch_rate_id,
    ...optionalFields
  } = req.body;

  const requiredFields = { sigungu_id, mgmt_dept_id, client_id, client_branch_name, client_branch_rate_id };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  const branch = { ...requiredFields, ...optionalFields };

  try {
    const newBranch = await clientBranchRepository.createClientBranch(branch);
    res.json(newBranch);
  } catch (error) {
    res.status(500).json({ message: 'Error creating client branch', error });
  }
}

const updateClientBranch = async (req, res) => {
  const { client_branch_id, ...updateFields } = req.body;
  if (!isValid(client_branch_id)) {
    return res.status(400).json({ message: 'Missing client_branch_id' });
  }

  try {
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const updatedBranch = await clientBranchRepository.patchClientBranch(client_branch_id, updateFields);
    res.json(updatedBranch);
  } catch (error) {
    res.status(500).json({ message: 'Error updating client branch', error });
  }
};

const changeClientBranchActivation = async (req, res) => {
  const { client_branch_id } = req.params;
  if (!isValid(client_branch_id)) {
    return res.status(400).json({ message: 'Missing client_branch_id' });
  }
  const client_branch = { client_branch_id };
  try {
    const updatedBranch = await clientBranchRepository.changeMultipleClientBranchActivations([client_branch_id], client_branch);
    res.json(updatedBranch);
  } catch (error) {
    res.status(500).json({ message: 'Error changing client branch activation', error });
  }
}

const deleteClientBranch = async (req, res) => {
  const { client_branch_id } = req.params;
  if (!isValid(client_branch_id)) {
    return res.status(400).json({ message: 'Missing client_branch_id' });
  }

  try {
    const deletedBranch = await clientBranchRepository.deleteClientBranch(client_branch_id);
    res.json(deletedBranch);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client branch', error });
  }
};

module.exports = {
  searchClientBranch,
  createClientBranch,
  updateClientBranch,
  changeClientBranchActivation,
  deleteClientBranch,
};

