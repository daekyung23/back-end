const sigunguRepository = require('../repositories/sigungu-repository');
const { Sigungu } = require('../utils/validation/schemas');

const SigunguController = {
  getSigunguBySidoId: async (req, res) => {
    let input = Sigungu.pick({ sido_id: true }).parse(req.query);
    const rows = await sigunguRepository.getSigunguBySidoId( input.sido_id );
    res.json({ sigungus: rows });
  },

  getSigunguById: async (req, res) => {
    let input = Sigungu.pick({ sigungu_id: true }).parse(req.params);
    const rows = await sigunguRepository.getSigunguById(input.sigungu_id);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Sigungu not found' });
    }
    res.json({ sigungu: rows[0] });
  }
};

module.exports = SigunguController