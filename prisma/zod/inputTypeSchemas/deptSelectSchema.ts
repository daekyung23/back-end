import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const deptSelectSchema: z.ZodType<Prisma.deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
}).strict()

export default deptSelectSchema;
