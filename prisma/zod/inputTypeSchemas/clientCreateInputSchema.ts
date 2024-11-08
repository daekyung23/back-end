import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const clientCreateInputSchema: z.ZodType<Prisma.clientCreateInput> = z.object({
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int().optional()
}).strict();

export default clientCreateInputSchema;
