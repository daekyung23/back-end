import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { inspection_approvalCountOrderByAggregateInputSchema } from './inspection_approvalCountOrderByAggregateInputSchema';
import { inspection_approvalAvgOrderByAggregateInputSchema } from './inspection_approvalAvgOrderByAggregateInputSchema';
import { inspection_approvalMaxOrderByAggregateInputSchema } from './inspection_approvalMaxOrderByAggregateInputSchema';
import { inspection_approvalMinOrderByAggregateInputSchema } from './inspection_approvalMinOrderByAggregateInputSchema';
import { inspection_approvalSumOrderByAggregateInputSchema } from './inspection_approvalSumOrderByAggregateInputSchema';

export const inspection_approvalOrderByWithAggregationInputSchema: z.ZodType<Prisma.inspection_approvalOrderByWithAggregationInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approved_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_approved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => inspection_approvalCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => inspection_approvalAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => inspection_approvalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => inspection_approvalMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => inspection_approvalSumOrderByAggregateInputSchema).optional()
}).strict();

export default inspection_approvalOrderByWithAggregationInputSchema;
