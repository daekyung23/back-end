const sidoRepository = require('../repositories/sido-repository');
const { Nothing } = require('../utils/validation/custom-zod-types');
const { z } = require('zod');

const SidoController = {
  getAllSido: async (req, res) => {
    let input = Nothing.parse(req.query);
    const rows = await sidoRepository.getAllSido();
    res.json({ sidos: rows });
  }
};

module.exports = SidoController