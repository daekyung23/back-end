import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const client_rateCreateManyInputSchema: z.ZodType<Prisma.client_rateCreateManyInput> = z.object({
  client_rate_id: z.number().int().optional(),
  rate_type: z.string(),
  rate_detail: z.string().optional().nullable()
}).strict();

export default client_rateCreateManyInputSchema;
