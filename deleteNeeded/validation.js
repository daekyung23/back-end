// utils/validation.js
const isValid = (value) => {
  return value !== null && value !== undefined;
};

const toValidate = (value, defaultValue = null) => (isValid(value) ? value : defaultValue);

const validateFields = (requiredFields, res) => {
  for (const [field, value] of Object.entries(requiredFields)) {
    if (!isValid(value)) {
      return res.status(400).json({ error: `${field} is required and cannot be null or undefined.` });
    }
  }
};

/**
 * 값이 null인지 확인합니다.
 * @param {*} value 
 * @returns {boolean}
 */
const isNull = (value) => value === null;

/**
 * 값이 undefined인지 확인합니다.
 * @param {*} value 
 * @returns {boolean}
 */
const isUndefined = (value) => typeof value === 'undefined';

module.exports = {
  isValid,
  toValidate,
  validateFields,
  isNull,
  isUndefined,
};