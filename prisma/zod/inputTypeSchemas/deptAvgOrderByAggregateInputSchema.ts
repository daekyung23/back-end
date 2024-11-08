import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const deptAvgOrderByAggregateInputSchema: z.ZodType<Prisma.deptAvgOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default deptAvgOrderByAggregateInputSchema;
