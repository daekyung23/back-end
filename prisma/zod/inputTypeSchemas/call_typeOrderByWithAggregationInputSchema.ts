import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { call_typeCountOrderByAggregateInputSchema } from './call_typeCountOrderByAggregateInputSchema';
import { call_typeAvgOrderByAggregateInputSchema } from './call_typeAvgOrderByAggregateInputSchema';
import { call_typeMaxOrderByAggregateInputSchema } from './call_typeMaxOrderByAggregateInputSchema';
import { call_typeMinOrderByAggregateInputSchema } from './call_typeMinOrderByAggregateInputSchema';
import { call_typeSumOrderByAggregateInputSchema } from './call_typeSumOrderByAggregateInputSchema';

export const call_typeOrderByWithAggregationInputSchema: z.ZodType<Prisma.call_typeOrderByWithAggregationInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_name: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => call_typeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => call_typeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => call_typeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => call_typeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => call_typeSumOrderByAggregateInputSchema).optional()
}).strict();

export default call_typeOrderByWithAggregationInputSchema;
