import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { device_approvalCountOrderByAggregateInputSchema } from './device_approvalCountOrderByAggregateInputSchema';
import { device_approvalAvgOrderByAggregateInputSchema } from './device_approvalAvgOrderByAggregateInputSchema';
import { device_approvalMaxOrderByAggregateInputSchema } from './device_approvalMaxOrderByAggregateInputSchema';
import { device_approvalMinOrderByAggregateInputSchema } from './device_approvalMinOrderByAggregateInputSchema';
import { device_approvalSumOrderByAggregateInputSchema } from './device_approvalSumOrderByAggregateInputSchema';

export const device_approvalOrderByWithAggregationInputSchema: z.ZodType<Prisma.device_approvalOrderByWithAggregationInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  destination_location_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approve_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_approved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => device_approvalCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => device_approvalAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => device_approvalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => device_approvalMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => device_approvalSumOrderByAggregateInputSchema).optional()
}).strict();

export default device_approvalOrderByWithAggregationInputSchema;
