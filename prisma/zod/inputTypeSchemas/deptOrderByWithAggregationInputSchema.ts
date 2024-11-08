import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { deptCountOrderByAggregateInputSchema } from './deptCountOrderByAggregateInputSchema';
import { deptAvgOrderByAggregateInputSchema } from './deptAvgOrderByAggregateInputSchema';
import { deptMaxOrderByAggregateInputSchema } from './deptMaxOrderByAggregateInputSchema';
import { deptMinOrderByAggregateInputSchema } from './deptMinOrderByAggregateInputSchema';
import { deptSumOrderByAggregateInputSchema } from './deptSumOrderByAggregateInputSchema';

export const deptOrderByWithAggregationInputSchema: z.ZodType<Prisma.deptOrderByWithAggregationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => deptCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => deptAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => deptMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => deptMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => deptSumOrderByAggregateInputSchema).optional()
}).strict();

export default deptOrderByWithAggregationInputSchema;
