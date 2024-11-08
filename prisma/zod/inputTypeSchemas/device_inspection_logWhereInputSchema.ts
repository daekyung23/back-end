import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { Enumdevice_inspection_log_statusNullableFilterSchema } from './Enumdevice_inspection_log_statusNullableFilterSchema';
import { device_inspection_log_statusSchema } from './device_inspection_log_statusSchema';

export const device_inspection_logWhereInputSchema: z.ZodType<Prisma.device_inspection_logWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_inspection_logWhereInputSchema),z.lazy(() => device_inspection_logWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_inspection_logWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_inspection_logWhereInputSchema),z.lazy(() => device_inspection_logWhereInputSchema).array() ]).optional(),
  device_inspection_log_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  device_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inspector_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inspection_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  visit_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  call_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  FL: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  FS: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  BL: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  BS: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_count_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_stock_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  toner_deliver_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_YE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_MA: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_CY: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_count_BK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  drum_replacement_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => Enumdevice_inspection_log_statusNullableFilterSchema),z.lazy(() => device_inspection_log_statusSchema) ]).optional().nullable(),
}).strict();

export default device_inspection_logWhereInputSchema;
