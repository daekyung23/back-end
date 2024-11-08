import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { callWhereInputSchema } from './callWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const callWhereUniqueInputSchema: z.ZodType<Prisma.callWhereUniqueInput> = z.object({
  call_id: z.number().int()
})
.and(z.object({
  call_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => callWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  requester_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_black_consumer: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  detail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  received_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  receiver_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  transferred_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  transferred_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  assigner_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export default callWhereUniqueInputSchema;
