import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const clientUncheckedCreateInputSchema: z.ZodType<Prisma.clientUncheckedCreateInput> = z.object({
  client_id: z.number().int().optional(),
  parent_client_id: z.number().int().optional().nullable(),
  default_client_branch_rate_id: z.number().int(),
  client_name: z.string(),
  is_active: z.number().int().optional()
}).strict();

export default clientUncheckedCreateInputSchema;
