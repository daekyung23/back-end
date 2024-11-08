import { z } from 'zod';

/////////////////////////////////////////
// DEVICE SCHEMA
/////////////////////////////////////////

export const deviceSchema = z.object({
  device_id: z.number().int(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().nullable(),
  last_location_log_id: z.number().int().nullable(),
  status_id: z.number().int(),
})

export type device = z.infer<typeof deviceSchema>

export default deviceSchema;
