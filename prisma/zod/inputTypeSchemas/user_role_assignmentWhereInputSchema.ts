import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const user_role_assignmentWhereInputSchema: z.ZodType<Prisma.user_role_assignmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_role_assignmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default user_role_assignmentWhereInputSchema;
