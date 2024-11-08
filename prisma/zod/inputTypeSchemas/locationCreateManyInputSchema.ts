import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { location_location_typeSchema } from './location_location_typeSchema';

export const locationCreateManyInputSchema: z.ZodType<Prisma.locationCreateManyInput> = z.object({
  location_id: z.number().int().optional(),
  location_type: z.lazy(() => location_location_typeSchema),
  warehouse_id: z.number().int().optional().nullable(),
  client_branch_id: z.number().int().optional().nullable()
}).strict();

export default locationCreateManyInputSchema;