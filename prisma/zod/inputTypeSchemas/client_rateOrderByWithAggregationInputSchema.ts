import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { client_rateCountOrderByAggregateInputSchema } from './client_rateCountOrderByAggregateInputSchema';
import { client_rateAvgOrderByAggregateInputSchema } from './client_rateAvgOrderByAggregateInputSchema';
import { client_rateMaxOrderByAggregateInputSchema } from './client_rateMaxOrderByAggregateInputSchema';
import { client_rateMinOrderByAggregateInputSchema } from './client_rateMinOrderByAggregateInputSchema';
import { client_rateSumOrderByAggregateInputSchema } from './client_rateSumOrderByAggregateInputSchema';

export const client_rateOrderByWithAggregationInputSchema: z.ZodType<Prisma.client_rateOrderByWithAggregationInput> = z.object({
  client_rate_id: z.lazy(() => SortOrderSchema).optional(),
  rate_type: z.lazy(() => SortOrderSchema).optional(),
  rate_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => client_rateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => client_rateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => client_rateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => client_rateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => client_rateSumOrderByAggregateInputSchema).optional()
}).strict();

export default client_rateOrderByWithAggregationInputSchema;
