import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const sigunguSelectSchema: z.ZodType<Prisma.sigunguSelect> = z.object({
  sigungu_id: z.boolean().optional(),
  sigungu_name: z.boolean().optional(),
  sido_id: z.boolean().optional(),
}).strict()

export default sigunguSelectSchema;
