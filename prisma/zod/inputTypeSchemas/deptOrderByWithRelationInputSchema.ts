import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const deptOrderByWithRelationInputSchema: z.ZodType<Prisma.deptOrderByWithRelationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default deptOrderByWithRelationInputSchema;
