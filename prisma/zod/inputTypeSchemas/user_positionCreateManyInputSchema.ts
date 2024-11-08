import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const user_positionCreateManyInputSchema: z.ZodType<Prisma.user_positionCreateManyInput> = z.object({
  user_position_id: z.number().int().optional(),
  position_name: z.string()
}).strict();

export default user_positionCreateManyInputSchema;
