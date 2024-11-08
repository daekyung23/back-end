import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_role_assignmentCreateInputSchema: z.ZodType<Prisma.user_role_assignmentCreateInput> = z.object({
  role_id: z.number().int(),
  approver_id: z.number().int()
}).strict();

export default user_role_assignmentCreateInputSchema;
