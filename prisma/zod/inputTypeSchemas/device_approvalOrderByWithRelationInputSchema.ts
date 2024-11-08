import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const device_approvalOrderByWithRelationInputSchema: z.ZodType<Prisma.device_approvalOrderByWithRelationInput> = z.object({
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
}).strict();

export default device_approvalOrderByWithRelationInputSchema;
