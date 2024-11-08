import { z } from 'zod';

/////////////////////////////////////////
// V CLIENT SCHEMA
/////////////////////////////////////////

/**
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export const v_clientSchema = z.object({
  client_id: z.number().int(),
  client_name: z.string(),
  parent_client_id: z.number().int().nullable(),
  default_client_branch_rate_id: z.number().int(),
  is_active: z.number().int(),
  parent_client_name: z.string().nullable(),
  rate_type: z.string().nullable(),
  rate_detail: z.string().nullable(),
  branch_count: z.bigint(),
})

export type v_client = z.infer<typeof v_clientSchema>

export default v_clientSchema;
