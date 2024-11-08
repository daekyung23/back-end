import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { Enumdevice_inspection_log_statusNullableWithAggregatesFilterSchema } from './Enumdevice_inspection_log_statusNullableWithAggregatesFilterSchema';
import { device_inspection_log_statusSchema } from './device_inspection_log_statusSchema';

export const device_inspection_logScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_inspection_logScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema),z.lazy(() => device_inspection_logScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  device_inspection_log_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inspector_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inspection_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  visit_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  call_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  FL: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  FS: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  BL: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  BS: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_count_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_YE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_MA: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_CY: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_count_BK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => Enumdevice_inspection_log_statusNullableWithAggregatesFilterSchema),z.lazy(() => device_inspection_log_statusSchema) ]).optional().nullable(),
}).strict();

export default device_inspection_logScalarWhereWithAggregatesInputSchema;
