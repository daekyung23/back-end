import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const approval_roleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.approval_roleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema),z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema),z.lazy(() => approval_roleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  role_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  upper_role_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default approval_roleScalarWhereWithAggregatesInputSchema;
