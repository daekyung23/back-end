import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { deviceWhereInputSchema } from './deviceWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const deviceWhereUniqueInputSchema: z.ZodType<Prisma.deviceWhereUniqueInput> = z.object({
  device_id: z.number().int()
})
.and(z.object({
  device_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deviceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deviceWhereInputSchema),z.lazy(() => deviceWhereInputSchema).array() ]).optional(),
  device_model_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  owner_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mgmt_dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  serial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regi_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mac: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_inspection_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  last_location_log_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  status_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default deviceWhereUniqueInputSchema;
