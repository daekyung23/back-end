import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { v_deptCountOrderByAggregateInputSchema } from './v_deptCountOrderByAggregateInputSchema';
import { v_deptAvgOrderByAggregateInputSchema } from './v_deptAvgOrderByAggregateInputSchema';
import { v_deptMaxOrderByAggregateInputSchema } from './v_deptMaxOrderByAggregateInputSchema';
import { v_deptMinOrderByAggregateInputSchema } from './v_deptMinOrderByAggregateInputSchema';
import { v_deptSumOrderByAggregateInputSchema } from './v_deptSumOrderByAggregateInputSchema';

export const v_deptOrderByWithAggregationInputSchema: z.ZodType<Prisma.v_deptOrderByWithAggregationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parent_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => v_deptCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => v_deptAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => v_deptMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => v_deptMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => v_deptSumOrderByAggregateInputSchema).optional()
}).strict();

export default v_deptOrderByWithAggregationInputSchema;
