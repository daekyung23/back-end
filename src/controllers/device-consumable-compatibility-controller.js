// const deviceConsumableCompatibilityRepository = require('../repositories/device-consumable-compatibility-repository');
// const { isValid, toValidate, validateFields } = require('../utils/validation'); 

// const createAllDeviceConsumableCompatibility = async (req, res) => {
//   const { consumable_model_id, device_model_id_array } = req.body;

//   try {
//     await deviceConsumableCompatibilityRepository.createAllDeviceConsumableCompatibility(consumable_model_id, device_model_id_array);
//     res.json({ message: 'Device created' });
//   } catch (error) {
//     console.error('Error in createDevice controller:', error);
//     res.status(500).json({ error: 'Failed to create device' });
//   }
// };

// const deleteAllDeviceConsumableCompatibilityByConsumableModelId = async (req, res) => {
//   const { consumable_model_id } = req.query;
//   if (!isValid(consumable_model_id)) {
//     return res.status(400).json({ error: 'Missing consumable_model_id' });
//   }

//   try {
//     await deviceConsumableCompatibilityRepository.deleteAllDeviceConsumableCompatibilityByConsumableModelId(consumable_model_id);
//     res.json({ message: 'Device deleted' });
//   } catch (error) {
//     console.error('Error in deleteDevice controller:', error);
//     res.status(500).json({ error: 'Failed to delete device' });
//   }
// }

// module.exports = {
//   createAllDeviceConsumableCompatibility,
//   deleteAllDeviceConsumableCompatibilityByConsumableModelId,
// };
