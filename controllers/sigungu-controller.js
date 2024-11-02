const sigunguRepository = require('../repositories/sigungu-repository');
const { Sigungu } = require('../utils/validation/schemas');

const SigunguController = {
  getSigunguBySidoId: async (req, res) => {
    let input = Sigungu.pick({ sido_id: true }).parse(req.query);
    const rows = await sigunguRepository.getSigunguBySidoId( input.sido_id );
    res.json({ sigungus: rows });
  }
};

module.exports = SigunguController