import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_approvalWhereInputSchema } from './device_approvalWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const device_approvalWhereUniqueInputSchema: z.ZodType<Prisma.device_approvalWhereUniqueInput> = z.object({
  approval_id: z.number().int()
})
.and(z.object({
  approval_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  sub_approval_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  origin_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  destination_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  approve_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export default device_approvalWhereUniqueInputSchema;
