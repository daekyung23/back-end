const { Object, String, Natural } = require('../utils/custom-zod-types');

const Search = Object({
  searchTerms: String.default(''),
  page: Natural.default(1),
});

module.exports = { Search };