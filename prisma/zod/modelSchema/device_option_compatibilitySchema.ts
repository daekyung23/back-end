import { z } from 'zod';

/////////////////////////////////////////
// DEVICE OPTION COMPATIBILITY SCHEMA
/////////////////////////////////////////

export const device_option_compatibilitySchema = z.object({
  device_model_id: z.number().int(),
  option_model_id: z.number().int(),
})

export type device_option_compatibility = z.infer<typeof device_option_compatibilitySchema>

export default device_option_compatibilitySchema;
