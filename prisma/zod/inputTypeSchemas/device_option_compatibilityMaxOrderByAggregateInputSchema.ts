import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_option_compatibilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.device_option_compatibilityMaxOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_option_compatibilityMaxOrderByAggregateInputSchema;
