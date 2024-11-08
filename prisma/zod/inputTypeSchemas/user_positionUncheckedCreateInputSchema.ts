import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_positionUncheckedCreateInputSchema: z.ZodType<Prisma.user_positionUncheckedCreateInput> = z.object({
  user_position_id: z.number().int().optional(),
  position_name: z.string()
}).strict();

export default user_positionUncheckedCreateInputSchema;
