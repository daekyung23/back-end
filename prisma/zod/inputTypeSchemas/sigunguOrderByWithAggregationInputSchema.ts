import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { sigunguCountOrderByAggregateInputSchema } from './sigunguCountOrderByAggregateInputSchema';
import { sigunguAvgOrderByAggregateInputSchema } from './sigunguAvgOrderByAggregateInputSchema';
import { sigunguMaxOrderByAggregateInputSchema } from './sigunguMaxOrderByAggregateInputSchema';
import { sigunguMinOrderByAggregateInputSchema } from './sigunguMinOrderByAggregateInputSchema';
import { sigunguSumOrderByAggregateInputSchema } from './sigunguSumOrderByAggregateInputSchema';

export const sigunguOrderByWithAggregationInputSchema: z.ZodType<Prisma.sigunguOrderByWithAggregationInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => sigunguCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => sigunguAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => sigunguMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => sigunguMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => sigunguSumOrderByAggregateInputSchema).optional()
}).strict();

export default sigunguOrderByWithAggregationInputSchema;
