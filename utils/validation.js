// utils/validation.js
const isValid = (value) => {
  return value !== null && value !== undefined;
};

const toValidate = (value, defaultValue = null) => (isValid(value) ? value : defaultValue);

module.exports = {
  isValid,
  toValidate,
};