import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const v_deptScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.v_deptScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema),z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema),z.lazy(() => v_deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  dept_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  parent_dept_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default v_deptScalarWhereWithAggregatesInputSchema;
