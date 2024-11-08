import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const user_role_assignmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.user_role_assignmentCountOrderByAggregateInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  approver_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default user_role_assignmentCountOrderByAggregateInputSchema;
