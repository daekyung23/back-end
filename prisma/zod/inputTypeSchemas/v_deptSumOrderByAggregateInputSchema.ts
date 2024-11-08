import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const v_deptSumOrderByAggregateInputSchema: z.ZodType<Prisma.v_deptSumOrderByAggregateInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default v_deptSumOrderByAggregateInputSchema;
