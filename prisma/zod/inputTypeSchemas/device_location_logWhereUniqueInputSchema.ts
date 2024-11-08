import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_location_logWhereInputSchema } from './device_location_logWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const device_location_logWhereUniqueInputSchema: z.ZodType<Prisma.device_location_logWhereUniqueInput> = z.object({
  device_location_log_id: z.number().int()
})
.and(z.object({
  device_location_log_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_location_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_location_logWhereInputSchema),z.lazy(() => device_location_logWhereInputSchema).array() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  location_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  location_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export default device_location_logWhereUniqueInputSchema;
