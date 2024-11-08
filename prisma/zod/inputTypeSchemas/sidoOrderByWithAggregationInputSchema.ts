import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { sidoCountOrderByAggregateInputSchema } from './sidoCountOrderByAggregateInputSchema';
import { sidoAvgOrderByAggregateInputSchema } from './sidoAvgOrderByAggregateInputSchema';
import { sidoMaxOrderByAggregateInputSchema } from './sidoMaxOrderByAggregateInputSchema';
import { sidoMinOrderByAggregateInputSchema } from './sidoMinOrderByAggregateInputSchema';
import { sidoSumOrderByAggregateInputSchema } from './sidoSumOrderByAggregateInputSchema';

export const sidoOrderByWithAggregationInputSchema: z.ZodType<Prisma.sidoOrderByWithAggregationInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => sidoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => sidoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => sidoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => sidoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => sidoSumOrderByAggregateInputSchema).optional()
}).strict();

export default sidoOrderByWithAggregationInputSchema;
