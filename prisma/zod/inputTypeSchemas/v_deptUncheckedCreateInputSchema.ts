import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const v_deptUncheckedCreateInputSchema: z.ZodType<Prisma.v_deptUncheckedCreateInput> = z.object({
  dept_id: z.number().int(),
  dept_name: z.string(),
  parent_dept_id: z.number().int().optional().nullable(),
  parent_dept_name: z.string().optional().nullable()
}).strict();

export default v_deptUncheckedCreateInputSchema;
