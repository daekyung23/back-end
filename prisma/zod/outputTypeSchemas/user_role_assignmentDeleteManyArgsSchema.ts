import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentWhereInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereInputSchema'

export const user_role_assignmentDeleteManyArgsSchema: z.ZodType<Prisma.user_role_assignmentDeleteManyArgs> = z.object({
  where: user_role_assignmentWhereInputSchema.optional(),
}).strict() ;

export default user_role_assignmentDeleteManyArgsSchema;
