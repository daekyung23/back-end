import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema: z.ZodType<Prisma.user_role_assignmentRole_idApprover_idCompoundUniqueInput> = z.object({
  role_id: z.number(),
  approver_id: z.number()
}).strict();

export default user_role_assignmentRole_idApprover_idCompoundUniqueInputSchema;
