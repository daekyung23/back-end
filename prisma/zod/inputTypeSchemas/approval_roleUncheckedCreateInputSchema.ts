import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const approval_roleUncheckedCreateInputSchema: z.ZodType<Prisma.approval_roleUncheckedCreateInput> = z.object({
  role_id: z.number().int().optional(),
  role_name: z.string(),
  upper_role_id: z.number().int().optional().nullable()
}).strict();

export default approval_roleUncheckedCreateInputSchema;
