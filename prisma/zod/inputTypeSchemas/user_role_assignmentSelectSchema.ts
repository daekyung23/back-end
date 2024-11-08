import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const user_role_assignmentSelectSchema: z.ZodType<Prisma.user_role_assignmentSelect> = z.object({
  role_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
}).strict()

export default user_role_assignmentSelectSchema;
