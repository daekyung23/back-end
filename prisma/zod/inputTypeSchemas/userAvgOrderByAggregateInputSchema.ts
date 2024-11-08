import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const userAvgOrderByAggregateInputSchema: z.ZodType<Prisma.userAvgOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  approval_role_id: z.lazy(() => SortOrderSchema).optional(),
  position_id: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default userAvgOrderByAggregateInputSchema;
