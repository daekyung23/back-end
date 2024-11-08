import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const device_approvalWhereInputSchema: z.ZodType<Prisma.device_approvalWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approvalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approvalWhereInputSchema),z.lazy(() => device_approvalWhereInputSchema).array() ]).optional(),
  approval_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sub_approval_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  requester_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  request_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  approver_role_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  origin_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  destination_location_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  approver_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  approve_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  is_approved: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default device_approvalWhereInputSchema;
