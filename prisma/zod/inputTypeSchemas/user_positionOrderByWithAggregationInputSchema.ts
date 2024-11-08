import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { user_positionCountOrderByAggregateInputSchema } from './user_positionCountOrderByAggregateInputSchema';
import { user_positionAvgOrderByAggregateInputSchema } from './user_positionAvgOrderByAggregateInputSchema';
import { user_positionMaxOrderByAggregateInputSchema } from './user_positionMaxOrderByAggregateInputSchema';
import { user_positionMinOrderByAggregateInputSchema } from './user_positionMinOrderByAggregateInputSchema';
import { user_positionSumOrderByAggregateInputSchema } from './user_positionSumOrderByAggregateInputSchema';

export const user_positionOrderByWithAggregationInputSchema: z.ZodType<Prisma.user_positionOrderByWithAggregationInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional(),
  position_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => user_positionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => user_positionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => user_positionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => user_positionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => user_positionSumOrderByAggregateInputSchema).optional()
}).strict();

export default user_positionOrderByWithAggregationInputSchema;
