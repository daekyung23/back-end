import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_inspection_log_statusSchema } from './device_inspection_log_statusSchema';

export const NestedEnumdevice_inspection_log_statusNullableFilterSchema: z.ZodType<Prisma.NestedEnumdevice_inspection_log_statusNullableFilter> = z.object({
  equals: z.lazy(() => device_inspection_log_statusSchema).optional().nullable(),
  in: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => device_inspection_log_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => device_inspection_log_statusSchema),z.lazy(() => NestedEnumdevice_inspection_log_statusNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumdevice_inspection_log_statusNullableFilterSchema;
