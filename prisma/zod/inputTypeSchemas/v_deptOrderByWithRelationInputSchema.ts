import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const v_deptOrderByWithRelationInputSchema: z.ZodType<Prisma.v_deptOrderByWithRelationInput> = z.object({
  dept_id: z.lazy(() => SortOrderSchema).optional(),
  dept_name: z.lazy(() => SortOrderSchema).optional(),
  parent_dept_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parent_dept_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default v_deptOrderByWithRelationInputSchema;
