import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_modelCountOrderByAggregateInputSchema: z.ZodType<Prisma.device_modelCountOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  model_name: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  color_support: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_modelCountOrderByAggregateInputSchema;
