import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const inspection_approvalOrderByWithRelationInputSchema: z.ZodType<Prisma.inspection_approvalOrderByWithRelationInput> = z.object({
  approval_id: z.lazy(() => SortOrderSchema).optional(),
  requester_id: z.lazy(() => SortOrderSchema).optional(),
  request_at: z.lazy(() => SortOrderSchema).optional(),
  approver_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  device_inspection_log_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approved_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  is_approved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default inspection_approvalOrderByWithRelationInputSchema;
