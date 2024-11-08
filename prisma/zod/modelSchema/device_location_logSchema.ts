import { z } from 'zod';

/////////////////////////////////////////
// DEVICE LOCATION LOG SCHEMA
/////////////////////////////////////////

export const device_location_logSchema = z.object({
  device_location_log_id: z.number().int(),
  device_id: z.number().int(),
  location_date: z.coerce.date(),
  location_id: z.number().int(),
  location_detail: z.string().nullable(),
})

export type device_location_log = z.infer<typeof device_location_logSchema>

export default device_location_logSchema;
