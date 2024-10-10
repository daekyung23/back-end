const { group } = require('console');
const pool = require('./database'); // DB 연결 파일

const DBHelper = {
  
  search: async (selectFromJoin, where = null, groupBy = null, limit = null) => {
    let query = selectFromJoin;
    const params = [];

    // WHERE 절 조건 생성 (parseCondition을 이용)
    if (where && where.condition && where.params) {
      const whereCondition = parseCondition(where.condition, where.params); // 조건을 SQL로 변환
      query += ` WHERE (${whereCondition.sql})`;
      params.push(...whereCondition.values);  // 변환된 값을 params에 추가
    }
    if (groupBy){
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
    const [result] = await pool.query(query, params);
    return result;
  },
  
  // PATCH: 테이블의 데이터를 업데이트하는 함수
  patch: async (table, body, where) => {
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

    const [result] = await pool.query(query, params);
    return result;
  },

  // INSERT: 테이블에 새 데이터를 삽입하는 함수
  insert: async (table, body) => {
    let query = `INSERT INTO ${table} (`;
    const columns = Object.keys(body);
    const params = Object.values(body);

    query += columns.join(', ') + ') VALUES (';
    query += columns.map(() => '?').join(', ') + ')';

    // 쿼리 및 파라미터 출력
    console.log('Executing query:', query);
    console.log('With parameters:', params);

    const [result] = await pool.query(query, params);
    return result;
  },

  // DELETE: 특정 조건에 맞는 데이터를 삭제하는 함수
  delete: async (table, where) => {
    // WHERE 절 조건 생성
    const whereClause = Object.keys(where).map(key => `${key} = ?`).join(' AND ');
    const params = Object.values(where);

    // DELETE 쿼리 생성
    let query = `DELETE FROM ${table} WHERE ${whereClause}`;

    // 쿼리 및 파라미터 출력
    console.log('Executing query:', query);
    console.log('With parameters:', params);

    // 쿼리 실행
    const [result] = await pool.query(query, params);
    return result;
  },
};

const parseCondition = (condition, params) => {
  let sql = '';
  let values = [];       // SQL에 전달할 값들
  let stack = [];       // 스택을 사용하여 괄호 관리
  let conditionCount = 0;  // 조건의 개수
  let operatorCount = 0;   // AND 또는 OR의 개수

  for (let i = 0; i < condition.length; i++) {
    const char = condition[i];

    switch (char) {
      case '(':  // 괄호 열기
        stack.push(sql);  // 현재 SQL 상태를 스택에 저장
        sql += '(';       // SQL 문자열에 괄호 추가
        break;

      case ')':  // 괄호 닫기
        sql += ')';
        if (stack.length > 0) {
          sql = stack.pop() + sql; // 이전 SQL 상태와 현재 괄호를 합침
        }
        break;

      case ' ':  // 공백 무시
        break;

      case '?':  // 조건이 '?'인 경우
        if (conditionCount < params.length) {
          const { field, operator, value } = params[conditionCount];
          sql += `${field} ${operator} ?`;  // 필드와 연산자 추가
          values.push(value);  // 값 추가
          conditionCount++;  // 조건식 개수 증가
        } else {
          throw new Error(`ParseError: Not enough parameters provided for condition.`);
        }
        break;

      default:
        // "AND" 또는 "OR" 키워드를 만나면 SQL에 추가
        if (condition.startsWith('AND', i)) {
          sql += ' AND ';
          operatorCount++;
          i += 2;  // AND가 3글자이므로 인덱스 조정
        } else if (condition.startsWith('OR', i)) {
          sql += ' OR ';
          operatorCount++;
          i += 1;  // OR가 2글자이므로 인덱스 조정
        } else {
          throw new Error(`ParseError: Unexpected character '${char}' at position ${i}`);
        }
    }
  }

  // 괄호가 열렸지만 닫히지 않았을 때 오류 발생
  if (stack.length > 0) {
    throw new Error('ParseError: Unmatched opening parenthesis');
  }

  if (operatorCount !== conditionCount - 1) {
    throw new Error(`ParseError: Condition count mismatch. Expected ${conditionCount - 1} AND/OR operators but found ${operatorCount}.`);
  }

  return { sql, values };
};




module.exports = DBHelper;
