import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const consumable_modelSumOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelSumOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default consumable_modelSumOrderByAggregateInputSchema;
