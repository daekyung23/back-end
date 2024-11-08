import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sidoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.sidoMaxOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sidoMaxOrderByAggregateInputSchema;
