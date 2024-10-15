const log = require('./log');

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

/**
 * @class CheckIf
 * @description 유효성 검사를 위한 클래스
 * @param {any} value - 검사할 값
 * @returns {CheckIf} - CheckIf 인스턴스
 * @example
 * checkIf(value).isValid // boolean
 * checkIf(object).areValid.elseThrow(400);
 * checkIf(value).isFound.elseThrow('이름', 404); // isValid와 유사
 * checkIf(value).areFound.elseThrow('이름', 404); // length.inRange('이름', 0)과 유사
 * 
 * checkIf(value).isString // boolean
 * checkIf(value).isNumber // boolean
 * checkIf(value).isBoolean // boolean
 * checkIf(value).isArray // boolean
 * checkIf(value).isObject // boolean
 * checkIf(value).isDate // boolean
 * checkIf(object).length.inRange('길이', min, max) // boolean
 * checkIf(array).length.inRange('길이', min, max) // boolean
 * checkIf(string).length.inRange('길이', min, max) // boolean
 * 
 * checkIf(value).isValid.elseThrow('이름', 500);
 * checkIf(value).isString.elseThrow('이름', 500);
 * checkIf(value).isNumber.elseThrow('나이', 500);
 * checkIf(value).isBoolean.elseThrow('성별', 500);
 * checkIf(value).isArray.elseThrow('취미', 500);
 * checkIf(value).isObject.elseThrow('주소', 500);
 * checkIf(value).isDate.elseThrow('생일', 500);
 * 
 * checkIf(object).length.inRange(2, 10).elseThrow('이름', 2, 10);
 * checkIf(array).length.inRange(2, 10).elseThrow('이름', 2, 10);
 * checkIf(string).length.inRange(2, 10).elseThrow('이름', 2, 10);
 */
class CheckIf {
  constructor(value = null) {
    this.update(value);
  }

  update(newValue) {
    this.value = newValue;
    this.type = typeof newValue;
    this.or = false;
  }

  validate(condition, errMessage, errStatus = 400) {
    if (!condition) {
      throw new HttpError(errMessage, errStatus);
    }
  }

  createValidator(value, elseThrow, or) {
    const validator = () => value;
    validator.elseThrow = elseThrow;
    validator.toString = () => String(value);
    validator.ValueOf = () => value;
    [Symbol.toPrimitive] = () => value;
    return validator;
  }

  get isValid() {
    const isValid = this.value !== null && this.value !== undefined;
    return this.createValidator(isValid, (fieldName, errStatus = 400) => {
      this.validate(isValid, `${fieldName}는 유효한 값이어야 합니다. ${this.value}`, errStatus);
    });
  }

  get isFound() {
    const isFound = this.value !== null && this.value !== undefined;
    return this.createValidator(isFound, (fieldName, condition, errStatus = 404) => {
      new CheckIf(condition).isObject.elseThrow('조건',500)
      const conditionString = Object.entries(condition)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(', ');
      this.validate(isFound, `${fieldName}을 찾을 수 없습니다. ${conditionString}`, errStatus);
    });
  }

  // get areFound() {
  //   const validator = (fieldName) => {
  //     this.isArray.elseThrow(fieldName, 500);
  //     return this.value.length > 0
  //   };

  //   validator.elseThrow = (fieldName, min = null, max =, errStatus = 400) => {
  //     const invalidFields = Object.entries(this.value)
  //       .filter(([_, value]) => !new Assert(value).isValid())
  //       .map(([key]) => key);

  //     if (invalidFields.length) {
  //       throw new HttpError(
  //         `다음 필드들이 유효하지 않습니다: ${invalidFields.join(', ')}`,
  //         errStatus
  //       );
  //     }
  //   };

  //   validator.toString = () => String(validator());
  //   return validator;
  // }

  get areValid() {
    const validator = () => {
      this.isObject.elseThrow(fieldName, 500)

      return Object.entries(this.value).every(([_, value]) => 
        new Assert(value).isValid()
      );
    };

    validator.elseThrow = (errStatus = 400) => {
      const invalidFields = Object.entries(this.value)
        .filter(([_, value]) => !new Assert(value).isValid())
        .map(([key]) => key);

      if (invalidFields.length) {
        throw new HttpError(
          `다음 필드들이 유효하지 않습니다: ${invalidFields.join(', ')}`,
          errStatus
        );
      }
    };

    validator.toString = () => String(validator());
    return validator;
  }

  get isString() {
    const isStr = this.type === 'string';
    return this.createValidator(isStr, (fieldName, errStatus = 400) => {
      this.validate(isStr, `${fieldName}는 문자열이어야 합니다; ${this.value}`, errStatus);
    });
  }

  get isNumber() {
    const isNum = this.type === 'number';
    return this.createValidator(isNum, (fieldName, errStatus = 400) => {
      this.validate(isNum, `${fieldName}는 숫자이어야 합니다; ${this.value}`, errStatus);
    });
  }

  get isBoolean() {
    const isBool = this.type === 'boolean';
    return this.createValidator(isBool, (fieldName, errStatus = 400) => {
      this.validate(isBool, `${fieldName}는 불린 값이어야 합니다; ${this.value}`, errStatus);
    });
  }

  get isArray() {
    const isArr = Array.isArray(this.value);
    return this.createValidator(isArr, (fieldName, errStatus = 400) => {
      this.validate(isArr, `${fieldName}는 배열이어야 합니다; ${this.value}`, errStatus);
    });
  }

  get isObject() {
    const isObj = this.type === 'object' && this.value !== null && !Array.isArray(this.value);
    return this.createValidator(isObj, (fieldName, errStatus = 400) => {
      this.validate(isObj, `${fieldName}는 객체이어야 합니다; ${this.value}`, errStatus);
    });
  }

  get isDate() {
    const isDate = this.value instanceof Date;
    return this.createValidator(isDate, (fieldName, errStatus = 400) => {
      this.validate(isDate, `${fieldName}는 날짜 객체이어야 합니다; ${this.value}`, errStatus);
    });
  }

  get length() {
    const length = () => this.value.length;
    const inRange = length.inRange = (min, max) => {

      if (checkIf(min).isValid() && this.value.length < min) {
        return false
      }
      if (checkIf(max).isValid() && this.value.length > max) {
        return false
      }
      return true
    }

    inRange.elseThrow = (fieldName, min = null, max = null) => {

      this.isString.elseThrow(fieldName, 500);
  
      if (checkIf(min).isValid()) {
        this.validate(
          this.value.length >= min,
          `${fieldName} 문자열의 길이가 ${min} 이상이어야 합니다; ${this.value}`
        );
      }
  
      if (checkIf(max).isValid()) {
        this.validate(
          this.value.length <= max,
          `${fieldName} 문자열의 길이가 ${max} 이하이어야 합니다; ${this.value}`
        );
      }
    };
  
    length.toString = () => String(this.value.length);
  
    return length;
  }

  get array() {
    const length = () => this.value.length;
    const inRange = length.inRange = (min, max) => {

      if (checkIf(min).isValid() && this.value.length < min) {
        return false
      }
      if (checkIf(max).isValid() && this.value.length > max) {
        return false
      }
      return true
    }
    inRange.elseThrow = (fieldName, min = null, max = null) => {

      if (checkIf(min).isValid()) {
        this.validate(
          this.value.length >= min,
          `${fieldName} 배열의 원소가 ${min}개 이상이어야 합니다; ${this.value}`
        );
      }
  
      if (checkIf(max).isValid()) {
        this.validate(
          this.value.length <= max,
          `${fieldName} 배열의 원소가 ${max}개 이하이어야 합니다; ${this.value}`
        );
      }
    };
  
    length.log = (fieldName) => {
      log(`${fieldName} 배열 원소 갯수: ${this.value.length}`);
      return length;
    };
  
    length.toString = () => String(this.value.length);
  
    return { length };
  }
  
  get boolean() {
    const validator = (expected) => this.value === expected;
  
    validator.elseThrow = (fieldName, expected) => {
      this.isBoolean.elseThrow(fieldName, 500);
      this.validate(
        this.value === expected,
        `${fieldName}는 ${expected}이어야 합니다; ${this.value}`
      );
    };
  
    validator.toString = () => String(this.value);
  
    // isTrue와 isFalse에도 elseThrow를 연결합니다.
    const isTrue = () => validator(true);
    isTrue.elseThrow = (fieldName) => {
      validator.elseThrow(fieldName, true);
    };

    const isFalse = () => validator(false);
    isFalse.elseThrow = (fieldName) => {
      validator.elseThrow(fieldName, false);
    };
    return { isTrue, isFalse };
  }
}

const checkIf = new Proxy(CheckIf, {
  apply(target, thisArg, args) {
    return new target(...args);
  },
});

module.exports = { HttpError, checkIf };