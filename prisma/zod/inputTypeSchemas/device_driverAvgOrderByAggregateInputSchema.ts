import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_driverAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverAvgOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_driverAvgOrderByAggregateInputSchema;
