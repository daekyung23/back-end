const ClientRepository = require('../repositories/client-repository');
const ClientBranchRepository = require('../repositories/client-branch-repository');
const { isValid, toValidate, validateFields } = require('../utils/validation');

/**-------------------------------------------------------------------------
 * 고객사 검색 API 컨트롤러
 * @param {import('express').Request} req
 * @param {SearchClientQuery} req.query 
 * @param {import('express').Response} res 
 * 
 * @typedef {Object} SearchClientQuery
 * @property {string} [searchTerms] - 검색어 default ''
 * @property {number} [page]        - 페이지 번호 default 1
 * @property {string} [is_active]   - 활성 상태 default undefined
 * @property {string} [client_rate] - 클라이언트 등급 default undefined
 */
const searchClient = async (req, res) => {
  let { searchTerms, page, is_active, client_rate} = req.query;
  searchTerms = toValidate(searchTerms, '');
  page = toValidate(page, 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  try {
    const rows = await ClientRepository.searchClient(searchTerms, is_active, client_rate, offset, pageSize);
    const rowCounts = await ClientRepository.searchClientCount(searchTerms, is_active);
    const totalPages = Math.ceil(rowCounts / pageSize);
    res.json({ clients: rows, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Error searching clients', error });
  }
}

/**-------------------------------------------------------------------------
 * 고객사를 생성 API 컨트롤러
 * @param {import('express').Request} req
 * @param {ClientCreateBody} req.body
 * @param {import('express').Response} res
 * 
 * @typedef {Object} ClientCreateBody
 * @property {string} client_name             - 클라이언트 이름
 * @property {number} default_client_rate_id  - 클라이언트 등급 ID
 * @property {number|null} [parent_client_id] - 상위 클라이언트 ID
*/
const createClient = async (req, res) => {
  const {
    client_name,
    default_client_rate_id,
    ...optionalFields
  } = req.body;

  const requiredFields = { client_name, default_client_rate_id };
  const validationError = validateFields(requiredFields, res);
  if (validationError) return validationError;
  const client = { ...requiredFields, ...optionalFields };

  try {
    const newClient = await ClientRepository.createClient(client);
    res.json(newClient);
  } catch (error) {
    res.status(500).json({ message: 'Error creating client', error });
  }
}

/**-------------------------------------------------------------------------
 * 고객사 정보를 업데이트합니다.
 * @param {import('express').Request} req
 * @param {ClientUpdateBody} req.body
 * @param {import('express').Response} res
 *  
 * @typedef {Object} ClientUpdateBody
 * @property {string} client_id - 클라이언트 ID
 * @property {string} [client_name] - 클라이언트 이름
 * @property {number} [default_client_rate_id] - 클라이언트 등급 ID
 * @property {number|null} [parent_client_id] - 상위 클라이언트 ID
 */
const updateClient = async (req, res) => {
  const { client_id, ...updateFields } = req.body;
  if (!isValid(client_id)) {
    return res.status(400).json({ message: 'Missing client_id' });
  }

  try {
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const updatedClient = await ClientRepository.patchClient(client_id, updateFields);
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating client', error });
  }
}
/**
 * 특정 클라이언트의 활성화 상태를 변경합니다.
 * 재귀적일 시 하위 클라이언트와 브랜치를 재귀적으로 활성화/비활성화합니다.
 * 비활성화 시 재귀적입니다.
 * 활성화 시 비 재귀적입니다.
 *
 * @param {import('express').Request} req - Express 요청 객체
 * @param {import('express').Response} res - Express 응답 객체
 * @returns {Promise<void>}
 */
const changeClientActivation = async (req, res) => {
  /**
   * @type {ClientActivationRequest}
   */
  const { client_id, is_active } = req.body;
  // 비활성화는 재귀적, 활성화는 비 재귀적
  let isRecursive = !is_active

  // 클라이언트 ID 검증
  if (!isValid(client_id)) {
    return res.status(400).json({ message: 'Invalid or missing client_id' });
  }

  // is_active 검증
  if (!isValid(is_active)) {
    return res.status(400).json({ message: 'Invalid or missing is_active' });
  }

  let connection;
  try {
    // 트랜잭션 시작
    connection = await DBHelper.beginTransaction();

    if (isRecursive) {
      // 재귀적일 시, 모든 관련 클라이언트와 브랜치 활성화/비활성화

      // 모든 클라이언트 데이터 조회
      const allClients = await ClientRepository.getAllClients(connection);

      // 클라이언트 데이터를 Map으로 변환 (parent_client_id 기준)
      const clientsMap = allClients.reduce((acc, client) => {
        if (!acc[client.parent_client_id]) {
          acc[client.parent_client_id] = [];
        }
        acc[client.parent_client_id].push(client);
        return acc;
      }, {});

      // 대상 클라이언트 존재 여부 확인
      const targetClient = allClients.find(c => c.client_id === client_id);
      if (!targetClient) {
        await DBHelper.rollback(connection);
        return res.status(404).json({ message: 'Client not found' });
      }

      // 대상 클라이언트의 모든 하위 클라이언트 ID 수집
      const getAllDescendantClientIds = (client_id, clientsMap) => {
        const descendantIds = [];
        const stack = [client_id];

        while (stack.length > 0) {
          const currentId = stack.pop();
          const children = clientsMap[currentId] || [];
          children.forEach(child => {
            descendantIds.push(child.client_id);
            stack.push(child.client_id);
          });
        }

        return descendantIds;
      };

      const descendantClientIds = getAllDescendantClientIds(client_id, clientsMap);
      const allClientIds = [client_id, ...descendantClientIds];

      // 1. 관련 브랜치 정보 조회
      const allBranches = await ClientBranchRepository.getAllBranchesByClientIds(allClientIds, connection);
      const allBranchIds = allBranches.map(branch => branch.client_branch_id);

      // 2. 클라이언트 활성화 상태 변경
      await ClientRepository.changeMultipleClientActivations(allClientIds, { is_active }, connection);

      // 3. 브랜치 활성화 상태 변경
      await ClientBranchRepository.changeMultipleClientBranchActivations(allBranchIds,{ is_active }, connection);

      // 트랜잭션 커밋
      await DBHelper.commit(connection);

      res.json({ message: 'Client and all child clients and branches have been deactivated successfully.' });

    } else {
      // 비 재귀적일 시, 단일 클라이언트만 활성화/비활성화
      await ClientRepository.patchClient(client_id, { is_active }, connection);

      // 트랜잭션 커밋
      await DBHelper.commit(connection);

      res.json({ message: 'Client has been activated successfully.' });
    }

  } catch (error) {
    if (connection) {
      await DBHelper.rollback(connection);
    }
    console.error('Error updating client activation:', error);
    res.status(500).json({ message: 'Error updating client activation', error: 'Internal Server Error' });
  }
};

const deleteClient = async (req, res) => {
  const { client_id } = req.query;
  if (!isValid(client_id)) {
    return res.status(400).json({ message: 'Missing client_id' });
  }

  try {
    const deletedClient = await ClientRepository.deleteClient(client_id);
    res.json(deletedClient);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client', error });
  }
};

const checkDuplicateClient = async (req, res) => {
  const { client_name } = req.query;

  if (!client_name) {
    return res.status(400).json({ message: 'Client name is required' });
  }

  try {
    const isDuplicate = await ClientRepository.checkDuplicateClient(client_name);
    if (isDuplicate) {
      return res.status(200).json({ message: 'Duplicate client found' });
    } else {
      return res.status(200).json({ message: 'Client name is available' });
    }
  } catch (error) {
    console.error('Error checking duplicate client:', error);
    return res.status(500).json({ message: 'Error checking duplicate client', error });
  }
};

module.exports = {
  searchClient,
  createClient,
  updateClient,
  changeClientActivation,
  deleteClient,
  checkDuplicateClient,
};