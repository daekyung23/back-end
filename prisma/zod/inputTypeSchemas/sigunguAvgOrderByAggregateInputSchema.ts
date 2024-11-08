import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sigunguAvgOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguAvgOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sigunguAvgOrderByAggregateInputSchema;
