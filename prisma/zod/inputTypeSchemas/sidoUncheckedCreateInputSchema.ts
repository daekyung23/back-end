import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const sidoUncheckedCreateInputSchema: z.ZodType<Prisma.sidoUncheckedCreateInput> = z.object({
  sido_id: z.number().int().optional(),
  sido_name: z.string().optional().nullable()
}).strict();

export default sidoUncheckedCreateInputSchema;
