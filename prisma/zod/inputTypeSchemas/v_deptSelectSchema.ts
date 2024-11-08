import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const v_deptSelectSchema: z.ZodType<Prisma.v_deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  parent_dept_name: z.boolean().optional(),
}).strict()

export default v_deptSelectSchema;
