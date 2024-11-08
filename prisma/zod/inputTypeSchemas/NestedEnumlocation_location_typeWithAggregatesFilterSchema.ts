import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { location_location_typeSchema } from './location_location_typeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumlocation_location_typeFilterSchema } from './NestedEnumlocation_location_typeFilterSchema';

export const NestedEnumlocation_location_typeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumlocation_location_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => location_location_typeSchema).optional(),
  in: z.lazy(() => location_location_typeSchema).array().optional(),
  notIn: z.lazy(() => location_location_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => NestedEnumlocation_location_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumlocation_location_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumlocation_location_typeFilterSchema).optional()
}).strict();

export default NestedEnumlocation_location_typeWithAggregatesFilterSchema;
