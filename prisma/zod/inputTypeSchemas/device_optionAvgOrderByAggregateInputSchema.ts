import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_optionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_optionAvgOrderByAggregateInput> = z.object({
  device_option_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional(),
  location_warehouse_id: z.lazy(() => SortOrderSchema).optional(),
  location_device_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_optionAvgOrderByAggregateInputSchema;
