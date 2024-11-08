import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const sidoSelectSchema: z.ZodType<Prisma.sidoSelect> = z.object({
  sido_id: z.boolean().optional(),
  sido_name: z.boolean().optional(),
}).strict()

export default sidoSelectSchema;
