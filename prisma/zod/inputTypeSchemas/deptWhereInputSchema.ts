import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const deptWhereInputSchema: z.ZodType<Prisma.deptWhereInput> = z.object({
  AND: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => deptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deptWhereInputSchema),z.lazy(() => deptWhereInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  dept_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default deptWhereInputSchema;
