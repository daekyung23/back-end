import { z } from 'zod';

/////////////////////////////////////////
// DEVICE CONSUMABLE COMPATIBILITY SCHEMA
/////////////////////////////////////////

export const device_consumable_compatibilitySchema = z.object({
  device_model_id: z.number().int(),
  consumable_model_id: z.number().int(),
})

export type device_consumable_compatibility = z.infer<typeof device_consumable_compatibilitySchema>

export default device_consumable_compatibilitySchema;
