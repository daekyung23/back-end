const pool = require('./database'); // DB 연결 파일
const { isNull, isUndefined } = require('./validation');

const DBHelper = {

  /**
   * SELECT 쿼리를 실행합니다.
   * @param {string} selectFromJoin - SELECT와 JOIN 절을 포함한 문자열
   * @param {Object} where - WHERE 절 조건 객체
   * @param {string} groupBy - GROUP BY 절
   * @param {Object} limit - LIMIT와 OFFSET 객체
   * @returns {Array} - 쿼리 결과
   */
  search: async (selectFromJoin, where = null, groupBy = null, limit = null, connection = pool) => {
    let query = selectFromJoin;
    const params = [];

    // WHERE 절 조건 생성 (parseCondition을 이용)
    if (where && where.condition && where.params) {
      const { sql: whereSQL, values } = parseCondition(where.condition, where.params);
      if (whereSQL.trim()) { // whereSQL이 비어있지 않은 경우에만 WHERE 절 추가
        query += ` WHERE (${whereSQL})`;
        params.push(...values);
      }
    }

    if (groupBy) {
      query += ` GROUP BY ${groupBy}`;
    }

    // LIMIT와 OFFSET 처리 (optional)
    if (limit) {
      query += ` LIMIT ?, ?`;
      params.push(limit.offset, limit.pageSize);
    }

    // 쿼리 및 파라미터 출력
    console.log('Executing query:', query);
    console.log('With parameters:', params);

    // 쿼리 실행
    const [result] =  await connection.query(query, params);
    return result;
  },

  /**
   * 테이블의 데이터를 업데이트합니다.
   * @param {string} table - 테이블 이름
   * @param {Object} body - 업데이트할 데이터 객체
   * @param {Object} where - WHERE 절 조건 객체
   * @returns {Object} - 업데이트 결과
   */
  patch: async (table, body, where, connection = pool) => {
    let query = `UPDATE ${table} SET `;

    const columns = Object.keys(body);
    query += columns.map(column => `${column} = ?`).join(', ');
    const params = Object.values(body);

    // where 객체는 { login_id: 'user123' } 같은 형태
    const whereClause = Object.keys(where).map(key => `${key} = ?`).join(' AND ');
    query += ` WHERE ${whereClause}`;
    params.push(...Object.values(where));

    // 쿼리 및 파라미터 출력
    console.log('Executing query:', query);
    console.log('With parameters:', params);

    const [result] = await connection.query(query, params);
    return result;
  },

  /**
   * 테이블에 새 데이터를 삽입합니다.
   * @param {string} table - 테이블 이름
   * @param {Object} body - 삽입할 데이터 객체
   * @returns {Object} - 삽입 결과
   */
  insert: async (table, body, connection = pool) => {
    let query = `INSERT INTO ${table} (`;
    const columns = Object.keys(body);
    const params = Object.values(body);

    query += columns.join(', ') + ') VALUES (';
    query += columns.map(() => '?').join(', ') + ')';

    // 쿼리 및 파라미터 출력
    console.log('Executing query:', query);
    console.log('With parameters:', params);

    const [result] =  await connection.query(query, params);
    return result;
  },

  /**
   * 특정 조건에 맞는 데이터를 삭제합니다.
   * @param {string} table - 테이블 이름
   * @param {Object} where - WHERE 절 조건 객체
   * @returns {Object} - 삭제 결과
   */
  delete: async (table, where, connection = pool) => {
    // WHERE 절 조건 생성
    const whereClause = Object.keys(where).map(key => `${key} = ?`).join(' AND ');
    const params = Object.values(where);

    // DELETE 쿼리 생성
    let query = `DELETE FROM ${table} WHERE ${whereClause}`;

    // 쿼리 및 파라미터 출력
    console.log('Executing query:', query);
    console.log('With parameters:', params);

    // 쿼리 실행
    const [result] =  await connection.query(query, params);
    return result;
  },

   /**
   * 트랜잭션을 시작합니다.
   * @returns {Promise<import('mysql2/promise').Connection>} - 트랜잭션을 위한 커넥션 객체
   */
   beginTransaction: async () => {
    const connection = await pool.getConnection();
    await connection.beginTransaction();
    return connection;
  },

  /**
   * 트랜잭션을 커밋합니다.
   * @param {import('mysql2/promise').Connection} connection - 트랜잭션 커넥션 객체
   */
  commit: async (connection) => {
    await connection.commit();
    connection.release();
  },

  /**
   * 트랜잭션을 롤백합니다.
   * @param {import('mysql2/promise').Connection} connection - 트랜잭션 커넥션 객체
   */
  rollback: async (connection) => {
    await connection.rollback();
    connection.release();
  },
};

/**
 * 특정 조건을 추가할지 여부를 판단합니다.
 * @param {string} operator - SQL 연산자
 * @param {*} value - 조건 값
 * @param {string} [likeLeft] - LIKE 연산자의 왼쪽 와일드카드
 * @param {string} [likeRight] - LIKE 연산자의 오른쪽 와일드카드
 * @returns {boolean} - 조건을 추가할지 여부
 */
const shouldAddCondition = (operator, value) => {
  // 먼저 value가 undefined인지 확인
  if (isUndefined(value)) {
    return false;
  }

  // operator가 'LIKE'인 경우 추가 조건
  if (operator === 'LIKE') {
    // value가 null인 경우 조건을 스킵
    if (isNull(value)) {
      return false;
    }
  }

  // 그 외의 경우는 조건을 추가
  return true;
};


/**
 * 조건 객체를 파싱하여 SQL 조건 문자열과 값 배열을 반환합니다.
 * @param {string} condition - SQL 조건 문자열 (예: "field1 LIKE ? AND field2 = ?")
 * @param {Array} params - 조건에 대한 파라미터 객체 배열
 * @returns {Object} - { sql: string, values: Array }
 */
const parseCondition = (condition, params) => {
  let sql = '';
  let values = [];
  let stack = []; // 괄호 관리를 위한 스택
  let conditionCount = 0;
  let operatorCount = 0;
  let lastAppended = null; // 마지막으로 추가된 토큰 ('condition', 'operator', '(', ')')

  // 조건 문자열을 문자 단위로 순회
  for (let i = 0; i < condition.length; i++) {
    const char = condition[i];

    switch (char) {
      case '(': // 괄호 열기
        stack.push(lastAppended);
        sql += '(';
        lastAppended = '(';
        break;

      case ')': // 괄호 닫기
        sql += ')';
        lastAppended = stack.pop() || ')';
        break;

      case ' ': // 공백 무시
        break;

      case '?': // 조건 자리 표시자 처리
        if (conditionCount >= params.length) {
          throw new Error(`ParseError: Not enough parameters provided for condition.`);
        }

        const { field, operator, value, likeLeft = "", likeRight = "" } = params[conditionCount];
        let conditionSQL = '';
        let shouldAdd = shouldAddCondition(operator, value, likeLeft, likeRight);

        if (operator === '=') {
          if (isNull(value)) {
            conditionSQL = `${field} IS NULL`;
          } else {
            conditionSQL = `${field} = ?`;
            values.push(value);
          }
        } else if (operator === 'LIKE') {
          if (shouldAdd) {
            const pattern = `${likeLeft}${value}${likeRight}`;
            conditionSQL = `${field} LIKE ?`;
            values.push(pattern);
          }
        } else if (operator === 'IN') {
          if (Array.isArray(value) && value.length > 0) {
            const inPlaceholders = value.map(() => '?').join(', ');
            conditionSQL = `${field} IN (${inPlaceholders})`;
            values.push(...value);
          } else {
            // 빈 배열인 경우 조건을 추가하지 않음
            conditionSQL = '1=0'; // 항상 거짓인 조건
          }
        } else {
          // 필요 시 다른 연산자 추가 가능
          if (shouldAdd) {
            conditionSQL = `${field} ${operator} ?`;
            values.push(value);
          }
        }

        if (shouldAdd || (operator === '=' && isNull(value))) {
          // 이전에 논리 연산자가 있었다면 제거
          if (lastAppended === 'operator') {
            sql = removeTrailingOperator(sql);
            lastAppended = null;
          }
          sql += conditionSQL;
          lastAppended = 'condition';
        } else {
          // 조건을 스킵할 때 이전 논리 연산자 제거
          if (lastAppended === 'operator') {
            sql = removeTrailingOperator(sql);
            lastAppended = null;
          }
        }

        conditionCount++;
        break;

      default:
        // "AND" 또는 "OR" 키워드 처리
        if (condition.startsWith('AND', i)) {
          if (shouldAppendLogicalOperator(lastAppended)) {
            sql += ' AND ';
            lastAppended = 'operator';
            operatorCount++;
          }
          i += 2; // 'AND'는 3글자이므로 인덱스 조정
        } else if (condition.startsWith('OR', i)) {
          if (shouldAppendLogicalOperator(lastAppended)) {
            sql += ' OR ';
            lastAppended = 'operator';
            operatorCount++;
          }
          i += 1; // 'OR'는 2글자이므로 인덱스 조정
        } else {
          throw new Error(`ParseError: Unexpected character '${char}' at position ${i}`);
        }
    }
  }

  // 괄호가 열렸지만 닫히지 않았을 때 오류 발생
  if (stack.length > 0) {
    throw new Error('ParseError: Unmatched opening parenthesis');
  }

  // 논리 연산자 개수 검증
  if (operatorCount !== conditionCount - 1) {
    throw new Error(`ParseError: Condition count mismatch. Expected ${conditionCount - 1} AND/OR operators but found ${operatorCount}.`);
  }

  return { sql, values };
};

/**
 * SQL 문자열의 끝에 있는 논리 연산자를 제거합니다.
 * @param {string} sql - 현재 SQL 문자열
 * @returns {string} - 수정된 SQL 문자열
 */
const removeTrailingOperator = (sql) => {
  if (sql.endsWith(' AND ')) {
    return sql.slice(0, -5); // ' AND ' 제거
  } else if (sql.endsWith(' OR ')) {
    return sql.slice(0, -4); // ' OR ' 제거
  }
  return sql;
};

/**
 * 논리 연산자를 추가할 수 있는지 여부를 판단합니다.
 * @param {string} lastAppended - 마지막으로 추가된 토큰
 * @returns {boolean} - 논리 연산자를 추가할 수 있으면 true
 */
const shouldAppendLogicalOperator = (lastAppended) => {
  return lastAppended === 'condition' || lastAppended === ')';
};

module.exports = DBHelper;
