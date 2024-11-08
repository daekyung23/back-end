import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const device_location_logWhereInputSchema: z.ZodType<Prisma.device_location_logWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_location_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  device_location_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default device_location_logWhereInputSchema;
