import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const client_rateMinOrderByAggregateInputSchema: z.ZodType<Prisma.client_rateMinOrderByAggregateInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default client_rateMinOrderByAggregateInputSchema;
