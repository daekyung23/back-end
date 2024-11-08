import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const client_rateSelectSchema: z.ZodType<Prisma.client_rateSelect> = z.object({
  client_rate_id: z.boolean().optional(),
  rate_type: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
}).strict()

export default client_rateSelectSchema;
