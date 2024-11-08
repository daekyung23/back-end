import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const device_location_logScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_location_logScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_location_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_location_log_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  location_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default device_location_logScalarWhereWithAggregatesInputSchema;
