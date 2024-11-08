import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentCreateManyInputSchema } from '../inputTypeSchemas/user_role_assignmentCreateManyInputSchema'

export const user_role_assignmentCreateManyArgsSchema: z.ZodType<Prisma.user_role_assignmentCreateManyArgs> = z.object({
  data: z.union([ user_role_assignmentCreateManyInputSchema,user_role_assignmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default user_role_assignmentCreateManyArgsSchema;
