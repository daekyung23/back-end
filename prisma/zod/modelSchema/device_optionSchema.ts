import { z } from 'zod';
import { device_option_location_typeSchema } from '../inputTypeSchemas/device_option_location_typeSchema'

/////////////////////////////////////////
// DEVICE OPTION SCHEMA
/////////////////////////////////////////

export const device_optionSchema = z.object({
  location_type: device_option_location_typeSchema,
  device_option_id: z.number().int(),
  option_model_id: z.number().int(),
  serial: z.string().nullable(),
  is_active: z.number().int(),
  location_warehouse_id: z.number().int().nullable(),
  location_device_id: z.number().int().nullable(),
})

export type device_option = z.infer<typeof device_optionSchema>

export default device_optionSchema;
