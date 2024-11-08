import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const deviceWhereInputSchema: z.ZodType<Prisma.deviceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deviceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default deviceWhereInputSchema;
