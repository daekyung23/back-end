import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const user_role_assignmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.user_role_assignmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema),z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema),z.lazy(() => user_role_assignmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default user_role_assignmentScalarWhereWithAggregatesInputSchema;
