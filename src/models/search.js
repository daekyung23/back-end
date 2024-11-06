const { Schema, String, Natural } = require('../../utils/validation/custom-zod-types');

const Search = Schema({
  searchTerms: String.default(''),
  page: Natural.default(1),
});

module.exports = { Search };