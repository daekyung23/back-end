import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const client_rateCreateInputSchema: z.ZodType<Prisma.client_rateCreateInput> = z.object({
  rate_type: z.string(),
  rate_detail: z.string().optional().nullable()
}).strict();

export default client_rateCreateInputSchema;
