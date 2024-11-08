import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentCreateInputSchema } from '../inputTypeSchemas/user_role_assignmentCreateInputSchema'
import { user_role_assignmentUncheckedCreateInputSchema } from '../inputTypeSchemas/user_role_assignmentUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_role_assignmentSelectSchema: z.ZodType<Prisma.user_role_assignmentSelect> = z.object({
  role_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
}).strict()

export const user_role_assignmentCreateArgsSchema: z.ZodType<Prisma.user_role_assignmentCreateArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  data: z.union([ user_role_assignmentCreateInputSchema,user_role_assignmentUncheckedCreateInputSchema ]),
}).strict() ;

export default user_role_assignmentCreateArgsSchema;
