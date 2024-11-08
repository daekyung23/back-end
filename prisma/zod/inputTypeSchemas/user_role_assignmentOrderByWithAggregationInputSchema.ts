import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { user_role_assignmentCountOrderByAggregateInputSchema } from './user_role_assignmentCountOrderByAggregateInputSchema';
import { user_role_assignmentAvgOrderByAggregateInputSchema } from './user_role_assignmentAvgOrderByAggregateInputSchema';
import { user_role_assignmentMaxOrderByAggregateInputSchema } from './user_role_assignmentMaxOrderByAggregateInputSchema';
import { user_role_assignmentMinOrderByAggregateInputSchema } from './user_role_assignmentMinOrderByAggregateInputSchema';
import { user_role_assignmentSumOrderByAggregateInputSchema } from './user_role_assignmentSumOrderByAggregateInputSchema';

export const user_role_assignmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.user_role_assignmentOrderByWithAggregationInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => user_role_assignmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => user_role_assignmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => user_role_assignmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => user_role_assignmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => user_role_assignmentSumOrderByAggregateInputSchema).optional()
}).strict();

export default user_role_assignmentOrderByWithAggregationInputSchema;
