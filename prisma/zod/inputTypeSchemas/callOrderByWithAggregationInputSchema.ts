import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { callCountOrderByAggregateInputSchema } from './callCountOrderByAggregateInputSchema';
import { callAvgOrderByAggregateInputSchema } from './callAvgOrderByAggregateInputSchema';
import { callMaxOrderByAggregateInputSchema } from './callMaxOrderByAggregateInputSchema';
import { callMinOrderByAggregateInputSchema } from './callMinOrderByAggregateInputSchema';
import { callSumOrderByAggregateInputSchema } from './callSumOrderByAggregateInputSchema';

export const callOrderByWithAggregationInputSchema: z.ZodType<Prisma.callOrderByWithAggregationInput> = z.object({
  call_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  client_branch_id: z.lazy(() => SortOrderSchema).optional(),
  requester_name: z.lazy(() => SortOrderSchema).optional(),
  requester_num: z.lazy(() => SortOrderSchema).optional(),
  requester_black_consumer: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  detail: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  received_at: z.lazy(() => SortOrderSchema).optional(),
  receiver_id: z.lazy(() => SortOrderSchema).optional(),
  transferred_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  transferred_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  assigner_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completed_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => callCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => callAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => callMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => callMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => callSumOrderByAggregateInputSchema).optional()
}).strict();

export default callOrderByWithAggregationInputSchema;
