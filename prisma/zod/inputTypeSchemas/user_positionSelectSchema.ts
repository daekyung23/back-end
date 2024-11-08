import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const user_positionSelectSchema: z.ZodType<Prisma.user_positionSelect> = z.object({
  user_position_id: z.boolean().optional(),
  position_name: z.boolean().optional(),
}).strict()

export default user_positionSelectSchema;
