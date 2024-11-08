import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const callWhereInputSchema: z.ZodType<Prisma.callWhereInput> = z.object({
  AND: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => callWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => callWhereInputSchema),z.lazy(() => callWhereInputSchema).array() ]).optional(),
  call_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  requester_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requester_black_consumer: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  detail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  received_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  receiver_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  transferred_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  transferred_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  assigner_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default callWhereInputSchema;
