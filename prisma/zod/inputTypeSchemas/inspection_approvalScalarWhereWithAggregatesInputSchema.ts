import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const inspection_approvalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.inspection_approvalScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema),z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema),z.lazy(() => inspection_approvalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  approval_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  requester_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  approved_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default inspection_approvalScalarWhereWithAggregatesInputSchema;
