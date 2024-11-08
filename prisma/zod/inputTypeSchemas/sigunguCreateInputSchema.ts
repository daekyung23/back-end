import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const sigunguCreateInputSchema: z.ZodType<Prisma.sigunguCreateInput> = z.object({
  sigungu_name: z.string(),
  sido_id: z.number().int()
}).strict();

export default sigunguCreateInputSchema;
