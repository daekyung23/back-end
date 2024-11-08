import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { approval_roleCountOrderByAggregateInputSchema } from './approval_roleCountOrderByAggregateInputSchema';
import { approval_roleAvgOrderByAggregateInputSchema } from './approval_roleAvgOrderByAggregateInputSchema';
import { approval_roleMaxOrderByAggregateInputSchema } from './approval_roleMaxOrderByAggregateInputSchema';
import { approval_roleMinOrderByAggregateInputSchema } from './approval_roleMinOrderByAggregateInputSchema';
import { approval_roleSumOrderByAggregateInputSchema } from './approval_roleSumOrderByAggregateInputSchema';

export const approval_roleOrderByWithAggregationInputSchema: z.ZodType<Prisma.approval_roleOrderByWithAggregationInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => approval_roleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => approval_roleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => approval_roleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => approval_roleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => approval_roleSumOrderByAggregateInputSchema).optional()
}).strict();

export default approval_roleOrderByWithAggregationInputSchema;
