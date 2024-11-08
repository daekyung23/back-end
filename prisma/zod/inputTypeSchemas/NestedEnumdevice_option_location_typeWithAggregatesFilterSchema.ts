import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumdevice_option_location_typeFilterSchema } from './NestedEnumdevice_option_location_typeFilterSchema';

export const NestedEnumdevice_option_location_typeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumdevice_option_location_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => device_option_location_typeSchema).optional(),
  in: z.lazy(() => device_option_location_typeSchema).array().optional(),
  notIn: z.lazy(() => device_option_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => NestedEnumdevice_option_location_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema).optional()
}).strict();

export default NestedEnumdevice_option_location_typeWithAggregatesFilterSchema;
