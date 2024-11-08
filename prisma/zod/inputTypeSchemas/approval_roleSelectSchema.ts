import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const approval_roleSelectSchema: z.ZodType<Prisma.approval_roleSelect> = z.object({
  role_id: z.boolean().optional(),
  role_name: z.boolean().optional(),
  upper_role_id: z.boolean().optional(),
}).strict()

export default approval_roleSelectSchema;
