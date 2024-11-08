import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sidoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.sidoAvgOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sidoAvgOrderByAggregateInputSchema;
