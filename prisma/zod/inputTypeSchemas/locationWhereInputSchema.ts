import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { Enumlocation_location_typeFilterSchema } from './Enumlocation_location_typeFilterSchema';
import { location_location_typeSchema } from './location_location_typeSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const locationWhereInputSchema: z.ZodType<Prisma.locationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => locationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => locationWhereInputSchema),z.lazy(() => locationWhereInputSchema).array() ]).optional(),
  location_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  location_type: z.union([ z.lazy(() => Enumlocation_location_typeFilterSchema),z.lazy(() => location_location_typeSchema) ]).optional(),
  warehouse_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  client_branch_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default locationWhereInputSchema;
