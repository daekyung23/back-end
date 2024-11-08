import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const approval_roleMinOrderByAggregateInputSchema: z.ZodType<Prisma.approval_roleMinOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default approval_roleMinOrderByAggregateInputSchema;