import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const callScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.callScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => callScalarWhereWithAggregatesInputSchema),z.lazy(() => callScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => callScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => callScalarWhereWithAggregatesInputSchema),z.lazy(() => callScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  call_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  call_type_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  client_branch_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  requester_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requester_num: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requester_black_consumer: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  detail: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  received_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  receiver_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  transferred_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  transferred_dept_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  assigner_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default callScalarWhereWithAggregatesInputSchema;
