import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const deviceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.deviceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => deviceScalarWhereWithAggregatesInputSchema),z.lazy(() => deviceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => deviceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deviceScalarWhereWithAggregatesInputSchema),z.lazy(() => deviceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default deviceScalarWhereWithAggregatesInputSchema;
