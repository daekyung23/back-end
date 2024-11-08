import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const deptMaxOrderByAggregateInputSchema: z.ZodType<Prisma.deptMaxOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default deptMaxOrderByAggregateInputSchema;
