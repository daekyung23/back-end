import { z } from 'zod';

/////////////////////////////////////////
// APPROVAL ROLE SCHEMA
/////////////////////////////////////////

export const approval_roleSchema = z.object({
  role_id: z.number().int(),
  role_name: z.string(),
  upper_role_id: z.number().int().nullable(),
})

export type approval_role = z.infer<typeof approval_roleSchema>

export default approval_roleSchema;
