const DBHelper = require('../utils/DBHelper'); // DBHelper 
const db = require('../utils/database');

const deviceConsumableCompatibilityRepository = {
  createAllDeviceConsumableCompatibility: async (consumable_model_id, device_model_id_array) => {

    const query = `
      INSERT INTO device_consumable_compatibility (device_model_id, consumable_model_id)
      VALUES ${device_model_id_array.map(() => '(?, ?)').join(', ')}
    `;

    console.log('device_model_id_array:', device_model_id_array);
    const values = device_model_id_array.flatMap(device_model_id => [
      device_model_id,
      consumable_model_id
    ]);
    
    console.log('values:', values);
    try {
      const result = await db.execute(query, values);  // 실행
      return result;
    } catch (error) {
      console.error('Error executing query:', error);  // 에러 로그 추가
      throw error;  // 에러 재발생
    }

  },

  deleteAllDeviceConsumableCompatibilityByConsumableModelId: async ( consumable_model_id ) => {
    return await DBHelper.delete('device_consumable_compatibility', { consumable_model_id });
  },
};

module.exports = deviceConsumableCompatibilityRepository;