import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sidoCountOrderByAggregateInputSchema: z.ZodType<Prisma.sidoCountOrderByAggregateInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sidoCountOrderByAggregateInputSchema;
