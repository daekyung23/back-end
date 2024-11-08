import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_approvalAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_approvalAvgOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  approval_type_id: z.lazy(() => SortOrderSchema).optional(),
  sub_approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  origin_location_id: z.lazy(() => SortOrderSchema).optional(),
  destination_location_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_approvalAvgOrderByAggregateInputSchema;
