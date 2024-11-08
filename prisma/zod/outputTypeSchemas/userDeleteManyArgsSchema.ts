import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputSchema } from '../inputTypeSchemas/userWhereInputSchema'

export const userDeleteManyArgsSchema: z.ZodType<Prisma.userDeleteManyArgs> = z.object({
  where: userWhereInputSchema.optional(),
}).strict() ;

export default userDeleteManyArgsSchema;
