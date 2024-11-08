import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const clientCreateManyInputSchema: z.ZodType<Prisma.clientCreateManyInput> = z.object({
  client_id: z.number().int().optional(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int().optional()
}).strict();

export default clientCreateManyInputSchema;
