import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { userCountOrderByAggregateInputSchema } from './userCountOrderByAggregateInputSchema';
import { userAvgOrderByAggregateInputSchema } from './userAvgOrderByAggregateInputSchema';
import { userMaxOrderByAggregateInputSchema } from './userMaxOrderByAggregateInputSchema';
import { userMinOrderByAggregateInputSchema } from './userMinOrderByAggregateInputSchema';
import { userSumOrderByAggregateInputSchema } from './userSumOrderByAggregateInputSchema';

export const userOrderByWithAggregationInputSchema: z.ZodType<Prisma.userOrderByWithAggregationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional(),
  login_id: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  mobile_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  office_num: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  modified_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => userCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => userAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => userMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => userMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => userSumOrderByAggregateInputSchema).optional()
}).strict();

export default userOrderByWithAggregationInputSchema;
