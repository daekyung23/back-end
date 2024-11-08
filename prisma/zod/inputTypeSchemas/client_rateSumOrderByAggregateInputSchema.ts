import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const client_rateSumOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateSumOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default client_rateSumOrderByAggregateInputSchema;
