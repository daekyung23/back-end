import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_inspection_log_statusSchema } from './device_inspection_log_statusSchema';
import { NestedEnumdevice_inspection_log_statusNullableWithAggregatesFilterSchema } from './NestedEnumdevice_inspection_log_statusNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumdevice_inspection_log_statusNullableFilterSchema } from './NestedEnumdevice_inspection_log_statusNullableFilterSchema';

export const Enumdevice_inspection_log_statusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.Enumdevice_inspection_log_statusNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => device_inspection_log_statusSchema).optional().nullable(),
  in: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NestedEnumdevice_inspection_log_statusNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema).optional()
}).strict();

export default Enumdevice_inspection_log_statusNullableWithAggregatesFilterSchema;
