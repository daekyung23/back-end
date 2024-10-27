const clientBranchRepository = require('../repositories/client-branch-repository');
const { toValidate } = require('../utils/validation');
/**-------------------------------------------------------------------------
 * 고객사 지점을 검색합니다.
 * @param {import('express').Request} req
 * @param {BranchSearchQuery} req.query         
 * @param {import('express').Response} res              
 * 
 * @typedef {Object} BranchSearchQuery         
 * @property {string} [searchTerms] - 검색어 (default: '')
 * @property {number} [page]        - 페이지 번호 (default: 1)
 * @property {string} [is_active]   - 활성 상태 (default: undefined - 모든 상태)
 */
const searchClientBranch = async (req, res) => {
  const schema = z.object({
    searchTerms: z.string().optional().default(''),
    page: z.coerce.number().int().min(1).optional().default(1),
    isActive: z.coerce.number().int().min(0).max(1).optional()
  });

  const input = schema.parse(req.query);
  const { page, ...condition } = input;
  const pageSize = 10;
  const pagination = { pageSize, offset: (page - 1) * pageSize }

  const clientBranches = await clientBranchRepository.searchClientBranch(condition, pagination);
  const clientBranchCounts = await clientBranchRepository.searchClientBranchCount(condition);
  const totalPages = Math.ceil(clientBranchCounts / pageSize);
  res.json({ clientBranches, totalPages });
};

/**-------------------------------------------------------------------------
 * 새로운 고객사 지점을 생성합니다.
 * @param {import('express').Request} req                   
 * @param {BranchCreateBody} req.body                    
 * @param {import('express').Response} res                  
 * 
 * @typedef {Object} BranchCreateBody                        
 * @property {number} sigungu_id                   - 시군구 ID
 * @property {number} mgmt_dept_id                 - 관리 부서 ID
 * @property {number} client_id                    - 클라이언트 ID
 * @property {string} client_branch_name           - 지점 이름
 * @property {number} client_branch_rate_id        - 지점 등급 ID
 * @property {string|null} [branch_mgr_name]       - 담당자 이름 (default: null in DB)
 * @property {string|null} [branch_mgr_mobile_num] - 담당자 휴대폰 번호 (default: null in DB)
 * @property {string|null} [branch_mgr_office_num] - 담당자 사무실 번호 (default: null in DB)
 * @property {string|null} [branch_mgr_email]      - 담당자 이메일 (default: null in DB)
 * @property {number} [remote_support]             - 원격 지원 여부 (0: 미지원, 1: 지원)
 * @property {number} [push_alert]                 - 푸시 알림 설정 (0: 미설정, 1: 설정)
 */
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

/**-------------------------------------------------------------------------
 * 고객사 지점 정보를 업데이트합니다.
 * @param {import('express').Request} req                   
 * @param {BranchUpdateBody} req.body                    
 * @param {import('express').Response} res  
 * 
 * @typedef {Object} BranchUpdateBody             
 * @property {number} client_branch_id          - 고객사 지점 ID
 * @property {number} [sigungu_id]              - 시군구 ID
 * @property {number} [mgmt_dept_id]            - 관리 부서 ID
 * @property {number} [client_id]               - 클라이언트 ID
 * @property {string} [client_branch_name]      - 지점 이름
 * @property {number} [client_branch_rate_id]   - 지점 등급 ID
 * @property {string|null} [branch_mgr_name]         - 담당자 이름
 * @property {string|null} [branch_mgr_mobile_num]   - 담당자 휴대폰 번호
 * @property {string|null} [branch_mgr_office_num]   - 담당자 사무실 번호
 * @property {string|null} [branch_mgr_email]        - 담당자 이메일
 * @property {number} [remote_support]          - 원격 지원 여부 (0: 미지원, 1: 지원)
 * @property {number} [push_alert]              - 푸시 알림 설정 (0: 미설정, 1: 설정)
 * @property {number} [is_active]               - 활성 상태 (0: 비활성, 1: 활성)
 */
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

/**-------------------------------------------------------------------------
 * 고객사 지점의 활성 상태를 변경합니다.
 * @param {import('express').Request} req
 * @param {BranchActivationRequest} req.body
 * @param {import('express').Response} res
 * 
 * @typedef {Object} BranchActivationRequest
 * @property {number} client_branch_id - 고객사 지점 ID
 * @property {number} is_active        - 활성 상태 (0: 비활성, 1: 활성)
 */
const changeClientBranchActivation = async (req, res) => {
  const { client_branch_id } = req.body;
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

/**-------------------------------------------------------------------------
 * 고객사 지점을 삭제합니다.
 * @param {import('express').Request} req
 * @param {BranchDeleteQuery} req.query
 * @param {import('express').Response} res
 * 
 * @typedef {Object} BranchDeleteQuery
 * @property {number} client_branch_id - 삭제할 고객사 지점 ID
 */
const deleteClientBranch = async (req, res) => {
  const { client_branch_id } = req.query;
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

/**
 * 특정 고객사 ID로 하위 지점 정보를 가져옵니다.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const getBranchesByClientId = async (req, res) => {
  const { client_id } = req.query;
  if (!client_id) {
      return res.status(400).json({ message: 'Missing client_id' });
  }
  try {
      const branches = await clientBranchRepository.getBranchesByClientId(client_id);
      res.json(branches);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching branches by client ID', error });
  }
};

module.exports = {
  searchClientBranch,
  createClientBranch,
  updateClientBranch,
  changeClientBranchActivation,
  deleteClientBranch,
  getBranchesByClientId,
};

