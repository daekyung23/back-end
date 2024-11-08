import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_positionCreateInputSchema: z.ZodType<Prisma.user_positionCreateInput> = z.object({
  position_name: z.string()
}).strict();

export default user_positionCreateInputSchema;
