import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/user_role_assignmentUpdateManyMutationInputSchema'
import { user_role_assignmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/user_role_assignmentUncheckedUpdateManyInputSchema'
import { user_role_assignmentWhereInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereInputSchema'

export const user_role_assignmentUpdateManyArgsSchema: z.ZodType<Prisma.user_role_assignmentUpdateManyArgs> = z.object({
  data: z.union([ user_role_assignmentUpdateManyMutationInputSchema,user_role_assignmentUncheckedUpdateManyInputSchema ]),
  where: user_role_assignmentWhereInputSchema.optional(),
}).strict() ;

export default user_role_assignmentUpdateManyArgsSchema;
