import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_positionSumOrderByAggregateInputSchema: z.ZodType<Prisma.user_positionSumOrderByAggregateInput> = z.object({
  user_position_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default user_positionSumOrderByAggregateInputSchema;
