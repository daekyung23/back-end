import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const sigunguCreateManyInputSchema: z.ZodType<Prisma.sigunguCreateManyInput> = z.object({
  sigungu_id: z.number().int().optional(),
  sigungu_name: z.string(),
  sido_id: z.number().int()
}).strict();

export default sigunguCreateManyInputSchema;
