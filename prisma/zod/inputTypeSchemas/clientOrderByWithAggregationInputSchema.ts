import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { clientCountOrderByAggregateInputSchema } from './clientCountOrderByAggregateInputSchema';
import { clientAvgOrderByAggregateInputSchema } from './clientAvgOrderByAggregateInputSchema';
import { clientMaxOrderByAggregateInputSchema } from './clientMaxOrderByAggregateInputSchema';
import { clientMinOrderByAggregateInputSchema } from './clientMinOrderByAggregateInputSchema';
import { clientSumOrderByAggregateInputSchema } from './clientSumOrderByAggregateInputSchema';

export const clientOrderByWithAggregationInputSchema: z.ZodType<Prisma.clientOrderByWithAggregationInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => clientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => clientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => clientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => clientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => clientSumOrderByAggregateInputSchema).optional()
}).strict();

export default clientOrderByWithAggregationInputSchema;
