import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const consumable_modelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.consumable_modelMaxOrderByAggregateInput> = z.object({
  consumable_model_id: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional(),
  consumable_name: z.lazy(() => SortOrderSchema).optional(),
  consumable_type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default consumable_modelMaxOrderByAggregateInputSchema;
