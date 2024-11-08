import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_modelSumOrderByAggregateInputSchema: z.ZodType<Prisma.device_modelSumOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_modelSumOrderByAggregateInputSchema;