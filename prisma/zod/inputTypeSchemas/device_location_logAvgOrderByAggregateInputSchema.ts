import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_location_logAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_location_logAvgOrderByAggregateInput> = z.object({
  device_location_log_id: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  location_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_location_logAvgOrderByAggregateInputSchema;
