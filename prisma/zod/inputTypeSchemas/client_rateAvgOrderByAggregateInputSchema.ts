import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const client_rateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateAvgOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default client_rateAvgOrderByAggregateInputSchema;
