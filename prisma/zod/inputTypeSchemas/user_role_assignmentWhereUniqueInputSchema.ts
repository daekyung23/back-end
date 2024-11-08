import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema } from './user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema';
import { user_role_assignmentWhereInputSchema } from './user_role_assignmentWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const user_role_assignmentWhereUniqueInputSchema: z.ZodType<Prisma.user_role_assignmentWhereUniqueInput> = z.object({
  role_id_approver_id: z.lazy(() => user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema)
})
.and(z.object({
  role_id_approver_id: z.lazy(() => user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_role_assignmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_role_assignmentWhereInputSchema),z.lazy(() => user_role_assignmentWhereInputSchema).array() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  approver_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export default user_role_assignmentWhereUniqueInputSchema;
