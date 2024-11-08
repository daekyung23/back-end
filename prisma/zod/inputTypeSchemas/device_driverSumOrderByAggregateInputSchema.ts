import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_driverSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_driverSumOrderByAggregateInput> = z.object({
  device_driver_id: z.lazy(() => SortOrderSchema).optional(),
  device_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_driverSumOrderByAggregateInputSchema;
