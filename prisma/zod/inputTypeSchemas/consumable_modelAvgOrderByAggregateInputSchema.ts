import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const consumable_modelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelAvgOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default consumable_modelAvgOrderByAggregateInputSchema;
