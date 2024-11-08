import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sidoSumOrderByAggregateInputSchema: z.ZodType<Prisma.sidoSumOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sidoSumOrderByAggregateInputSchema;
