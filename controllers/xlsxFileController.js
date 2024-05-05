const xlsxFileModel = require('../models/xlsxFileModel');

exports.uploadExcel = async (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
    }
    try {
        await xlsxFileModel.processExcel(req.file);
        res.send({ message: 'File processed successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
