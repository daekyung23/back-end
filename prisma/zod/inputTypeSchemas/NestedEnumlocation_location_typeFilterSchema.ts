import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { location_location_typeSchema } from './location_location_typeSchema';

export const NestedEnumlocation_location_typeFilterSchema: z.ZodType<Prisma.NestedEnumlocation_location_typeFilter> = z.object({
  equals: z.lazy(() => location_location_typeSchema).optional(),
  in: z.lazy(() => location_location_typeSchema).array().optional(),
  notIn: z.lazy(() => location_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => NestedEnumlocation_location_typeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumlocation_location_typeFilterSchema;
