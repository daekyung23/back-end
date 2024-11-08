import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentWhereUniqueInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_role_assignmentSelectSchema: z.ZodType<Prisma.user_role_assignmentSelect> = z.object({
  role_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
}).strict()

export const user_role_assignmentFindUniqueArgsSchema: z.ZodType<Prisma.user_role_assignmentFindUniqueArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereUniqueInputSchema,
}).strict() ;

export default user_role_assignmentFindUniqueArgsSchema;
