import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const deptScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.deptScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => deptScalarWhereWithAggregatesInputSchema),z.lazy(() => deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => deptScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => deptScalarWhereWithAggregatesInputSchema),z.lazy(() => deptScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  dept_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  parent_dept_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  dept_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default deptScalarWhereWithAggregatesInputSchema;
