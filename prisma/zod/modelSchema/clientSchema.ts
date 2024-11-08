import { z } from 'zod';

/////////////////////////////////////////
// CLIENT SCHEMA
/////////////////////////////////////////

export const clientSchema = z.object({
  client_id: z.number().int(),
  parent_client_id: z.number().int().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int(),
})

export type client = z.infer<typeof clientSchema>

export default clientSchema;
