import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const approval_roleCreateInputSchema: z.ZodType<Prisma.approval_roleCreateInput> = z.object({
  role_name: z.string(),
  upper_role_id: z.number().int().optional().nullable()
}).strict();

export default approval_roleCreateInputSchema;
