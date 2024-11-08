import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const sidoCreateInputSchema: z.ZodType<Prisma.sidoCreateInput> = z.object({
  sido_name: z.string().optional().nullable()
}).strict();

export default sidoCreateInputSchema;
