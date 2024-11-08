import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const deptUncheckedCreateInputSchema: z.ZodType<Prisma.deptUncheckedCreateInput> = z.object({
  dept_id: z.number().int().optional(),
  parent_dept_id: z.number().int().optional().nullable(),
  dept_name: z.string()
}).strict();

export default deptUncheckedCreateInputSchema;
