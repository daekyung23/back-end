import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';
import { NestedEnumdevice_option_location_typeFilterSchema } from './NestedEnumdevice_option_location_typeFilterSchema';

export const Enumdevice_option_location_typeFilterSchema: z.ZodType<Prisma.Enumdevice_option_location_typeFilter> = z.object({
  equals: z.lazy(() => device_option_location_typeSchema).optional(),
  in: z.lazy(() => device_option_location_typeSchema).array().optional(),
  notIn: z.lazy(() => device_option_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => NestedEnumdevice_option_location_typeFilterSchema) ]).optional(),
}).strict();

export default Enumdevice_option_location_typeFilterSchema;
