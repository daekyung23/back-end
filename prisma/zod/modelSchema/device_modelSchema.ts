import { z } from 'zod';

/////////////////////////////////////////
// DEVICE MODEL SCHEMA
/////////////////////////////////////////

export const device_modelSchema = z.object({
  device_model_id: z.number().int(),
  model_name: z.string(),
  manufacturer: z.string(),
  color_support: z.number().int(),
})

export type device_model = z.infer<typeof device_modelSchema>

export default device_modelSchema;
