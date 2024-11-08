import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const v_deptWhereInputSchema: z.ZodType<Prisma.v_deptWhereInput> = z.object({
  AND: z.union([ z.lazy(() => v_deptWhereInputSchema),z.lazy(() => v_deptWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deptWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deptWhereInputSchema),z.lazy(() => v_deptWhereInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  dept_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  parent_dept_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default v_deptWhereInputSchema;
