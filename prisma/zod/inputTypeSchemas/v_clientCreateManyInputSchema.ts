import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const v_clientCreateManyInputSchema: z.ZodType<Prisma.v_clientCreateManyInput> = z.object({
  client_id: z.number().int().optional(),
  client_name: z.string(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.number().int(),
  is_active: z.number().int().optional(),
  parent_client_name: z.string().optional().nullable(),
  rate_type: z.string().optional().nullable(),
  rate_detail: z.string().optional().nullable(),
  branch_count: z.bigint().optional()
}).strict();

export default v_clientCreateManyInputSchema;
