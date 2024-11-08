import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { Enumlocation_location_typeWithAggregatesFilterSchema } from './Enumlocation_location_typeWithAggregatesFilterSchema';
import { location_location_typeSchema } from './location_location_typeSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const locationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.locationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => locationScalarWhereWithAggregatesInputSchema),z.lazy(() => locationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => locationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => locationScalarWhereWithAggregatesInputSchema),z.lazy(() => locationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  location_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumlocation_location_typeWithAggregatesFilterSchema),z.lazy(() => location_location_typeSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default locationScalarWhereWithAggregatesInputSchema;
