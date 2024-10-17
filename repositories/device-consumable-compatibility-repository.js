const DBHelper = require('../utils/DBHelper'); // DBHelper 
const db = require('../utils/database');

const deviceConsumableCompatibilityRepository = {
  createAllDeviceConsumableCompatibility: async (consumable_model_id, device_model_id_array) => {

    const query = `
      INSERT INTO photo (device_model_id, consumable_model_id)
      VALUES ${device_model_id_array.map(() => '(?, ?)').join(', ')}
    `;

    const values = device_model_id_array.flatMap(device_model_id => [
      device_model_id,
      consumable_model_id
  ]);

  const [result] = await db.execute(query, values);

  return result;
},

  deleteAllDeviceConsumableCompatibilityByConsumableModelId: async ( consumable_model_id ) => {
    return await DBHelper.delete('device_consumable_compatibility', { consumable_model_id });
  },
};

module.exports = deviceConsumableCompatibilityRepository;