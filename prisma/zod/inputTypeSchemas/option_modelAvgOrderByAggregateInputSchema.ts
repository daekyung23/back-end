import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const option_modelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.option_modelAvgOrderByAggregateInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default option_modelAvgOrderByAggregateInputSchema;
