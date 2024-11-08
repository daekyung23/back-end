import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const deptCreateInputSchema: z.ZodType<Prisma.deptCreateInput> = z.object({
  parent_dept_id: z.number().int().optional().nullable(),
  dept_name: z.string()
}).strict();

export default deptCreateInputSchema;
