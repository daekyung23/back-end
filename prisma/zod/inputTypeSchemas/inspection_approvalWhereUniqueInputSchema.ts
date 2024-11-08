import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { inspection_approvalWhereInputSchema } from './inspection_approvalWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const inspection_approvalWhereUniqueInputSchema: z.ZodType<Prisma.inspection_approvalWhereUniqueInput> = z.object({
  approval_id: z.number().int()
})
.and(z.object({
  approval_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => inspection_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => inspection_approvalWhereInputSchema),z.lazy(() => inspection_approvalWhereInputSchema).array() ]).optional(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  device_inspection_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  approved_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export default inspection_approvalWhereUniqueInputSchema;
