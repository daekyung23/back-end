import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const deptCreateManyInputSchema: z.ZodType<Prisma.deptCreateManyInput> = z.object({
  dept_id: z.number().int().optional(),
  parent_dept_id: z.number().int().optional().nullable(),
  dept_name: z.string()
}).strict();

export default deptCreateManyInputSchema;
