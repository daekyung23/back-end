import { z } from 'zod';

/////////////////////////////////////////
// CALL TYPE SCHEMA
/////////////////////////////////////////

export const call_typeSchema = z.object({
  call_type_id: z.number().int(),
  call_type_name: z.string(),
  parent_call_type_id: z.number().int().nullable(),
})

export type call_type = z.infer<typeof call_typeSchema>

export default call_typeSchema;
