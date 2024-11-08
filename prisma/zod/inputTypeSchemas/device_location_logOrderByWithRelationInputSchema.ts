import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const device_location_logOrderByWithRelationInputSchema: z.ZodType<Prisma.device_location_logOrderByWithRelationInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_date: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional(),
  location_detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default device_location_logOrderByWithRelationInputSchema;
