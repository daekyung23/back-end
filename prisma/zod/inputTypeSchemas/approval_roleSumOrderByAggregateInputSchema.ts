import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const approval_roleSumOrderByAggregateInputSchema: z.ZodType<Prisma.approval_roleSumOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default approval_roleSumOrderByAggregateInputSchema;
