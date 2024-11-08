import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { deptWhereInputSchema } from './deptWhereInputSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const deptWhereUniqueInputSchema: z.ZodType<Prisma.deptWhereUniqueInput> = z.object({
  dept_id: z.number().int()
})
.and(z.object({
  dept_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  dept_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default deptWhereUniqueInputSchema;
