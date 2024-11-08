import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const device_consumable_compatibilityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityAvgOrderByAggregateInput> = z.object({
  device_model_id: z.lazy(() => SortOrderSchema).optional(),
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default device_consumable_compatibilityAvgOrderByAggregateInputSchema;
