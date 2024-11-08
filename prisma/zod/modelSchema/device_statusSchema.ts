import { z } from 'zod';

/////////////////////////////////////////
// DEVICE STATUS SCHEMA
/////////////////////////////////////////

export const device_statusSchema = z.object({
  status_id: z.number().int(),
  status_name: z.string(),
})

export type device_status = z.infer<typeof device_statusSchema>

export default device_statusSchema;
