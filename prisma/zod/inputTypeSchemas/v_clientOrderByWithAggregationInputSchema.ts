import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { v_clientCountOrderByAggregateInputSchema } from './v_clientCountOrderByAggregateInputSchema';
import { v_clientAvgOrderByAggregateInputSchema } from './v_clientAvgOrderByAggregateInputSchema';
import { v_clientMaxOrderByAggregateInputSchema } from './v_clientMaxOrderByAggregateInputSchema';
import { v_clientMinOrderByAggregateInputSchema } from './v_clientMinOrderByAggregateInputSchema';
import { v_clientSumOrderByAggregateInputSchema } from './v_clientSumOrderByAggregateInputSchema';

export const v_clientOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_clientOrderByWithAggregationInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  parent_client_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rate_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rate_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  branch_count: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => v_clientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_clientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_clientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_clientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_clientSumOrderByAggregateInputSchema).optional()
}).strict();

export default v_clientOrderByWithAggregationInputSchema;
