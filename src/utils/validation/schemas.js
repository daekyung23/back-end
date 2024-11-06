const { Integer, Natural, String, Double, Enum, Binary, Object, Email, Undefined, Schema } = require('./custom-zod-types');

class Schemas {
  // 실제 스키마--------------------------------
  Sigungu = Schema({
    sigungu_id: Natural,
    sigungu_name: String.max(45),
    sido_id: Natural,
  });

  Sido = Schema({
    sido_id: Natural,
    sido_name: String.max(45),
  });

  omitUserId(schema) {
    return schema.omit({ user_id: true });
  }

  // 가상 스키마--------------------------------
  Search = Schema({
    search_term: String.max(45).default(''),
  });
}
const schemas = new Schemas();
module.exports = schemas;