import { z } from 'zod';

/////////////////////////////////////////
// DEVICE APPROVAL TYPE SCHEMA
/////////////////////////////////////////

export const device_approval_typeSchema = z.object({
  approval_type_id: z.number().int(),
  approval_type_name: z.string(),
})

export type device_approval_type = z.infer<typeof device_approval_typeSchema>

export default device_approval_typeSchema;
