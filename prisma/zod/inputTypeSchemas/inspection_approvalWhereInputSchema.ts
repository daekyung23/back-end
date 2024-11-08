import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const inspection_approvalWhereInputSchema: z.ZodType<Prisma.inspection_approvalWhereInput> = z.object({
  AND: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => inspection_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  approval_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  approved_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default inspection_approvalWhereInputSchema;
