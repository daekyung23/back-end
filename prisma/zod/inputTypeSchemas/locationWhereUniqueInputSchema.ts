import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { locationWhereInputSchema } from './locationWhereInputSchema';
import { Enumlocation_location_typeFilterSchema } from './Enumlocation_location_typeFilterSchema';
import { location_location_typeSchema } from './location_location_typeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const locationWhereUniqueInputSchema: z.ZodType<Prisma.locationWhereUniqueInput> = z.object({
  location_id: z.number().int()
})
.and(z.object({
  location_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => locationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumlocation_location_typeFilterSchema),z.lazy(() => location_location_typeSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export default locationWhereUniqueInputSchema;
