import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const inspection_approvalSumOrderByAggregateInputSchema: z.ZodType<Prisma.inspection_approvalSumOrderByAggregateInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.lazy(() => SortOrderSchema).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional(),
  is_approved: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default inspection_approvalSumOrderByAggregateInputSchema;
