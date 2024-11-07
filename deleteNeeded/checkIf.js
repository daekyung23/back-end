const { ValidationError } = require('./custom-error')

/**
 * @class CheckIf
 * @description 유효성 검사를 위한 클래스
 * @param {any} value - 검사할 값
 * @returns {CheckIf} - CheckIf 인스턴스
 * @example
 */
class CheckIf {
  constructor(value = null) {
    this.value = value;
    this.currentSchema = null; 
    this.result = null;
    this.return = null;
    this.toString = () => {
      return String(Boolean(this.return))
    }
    this.valueOf = () => Boolean(this.return);
    this[Symbol.toPrimitive] = () => {
      return Boolean(this.return); 
    };
  }

  is(schema) {
    this.currentSchema = schema; // 스키마 저장
    const result = schema.safeParse(this.value); // 전체 결과 객체를 할당
    this.result = result;
    this.return = result.success;
    return this;
  }

  elseThrow(fieldName = '', errStatus = 400) {
    if (!this.result.success) {
      const errors = this.result.error.errors.map(error => ({
        field: error.path.length > 0 ? error.path.join('.') : fieldName,
        message: error.message,
        code: error.code
      }));
      throw new ValidationError(errors, errStatus);
    }
  }
}

const checkIf = (value) => new CheckIf(value)

module.exports = { checkIf };