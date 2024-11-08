import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sigunguMinOrderByAggregateInputSchema: z.ZodType<Prisma.sigunguMinOrderByAggregateInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sigunguMinOrderByAggregateInputSchema;
