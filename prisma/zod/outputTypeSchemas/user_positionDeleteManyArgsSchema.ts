import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionWhereInputSchema } from '../inputTypeSchemas/user_positionWhereInputSchema'

export const user_positionDeleteManyArgsSchema: z.ZodType<Prisma.user_positionDeleteManyArgs> = z.object({
  where: user_positionWhereInputSchema.optional(),
}).strict() ;

export default user_positionDeleteManyArgsSchema;
