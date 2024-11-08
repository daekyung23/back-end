import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentWhereUniqueInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereUniqueInputSchema'
import { user_role_assignmentCreateInputSchema } from '../inputTypeSchemas/user_role_assignmentCreateInputSchema'
import { user_role_assignmentUncheckedCreateInputSchema } from '../inputTypeSchemas/user_role_assignmentUncheckedCreateInputSchema'
import { user_role_assignmentUpdateInputSchema } from '../inputTypeSchemas/user_role_assignmentUpdateInputSchema'
import { user_role_assignmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/user_role_assignmentUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_role_assignmentSelectSchema: z.ZodType<Prisma.user_role_assignmentSelect> = z.object({
  role_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
}).strict()

export const user_role_assignmentUpsertArgsSchema: z.ZodType<Prisma.user_role_assignmentUpsertArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereUniqueInputSchema,
  create: z.union([ user_role_assignmentCreateInputSchema,user_role_assignmentUncheckedCreateInputSchema ]),
  update: z.union([ user_role_assignmentUpdateInputSchema,user_role_assignmentUncheckedUpdateInputSchema ]),
}).strict() ;

export default user_role_assignmentUpsertArgsSchema;
