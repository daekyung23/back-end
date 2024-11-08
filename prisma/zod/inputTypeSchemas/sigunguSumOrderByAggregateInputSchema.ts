import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sigunguSumOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguSumOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sigunguSumOrderByAggregateInputSchema;
