import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentWhereInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereInputSchema'
import { user_role_assignmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_role_assignmentOrderByWithRelationInputSchema'
import { user_role_assignmentWhereUniqueInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereUniqueInputSchema'
import { User_role_assignmentScalarFieldEnumSchema } from '../inputTypeSchemas/User_role_assignmentScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_role_assignmentSelectSchema: z.ZodType<Prisma.user_role_assignmentSelect> = z.object({
  role_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
}).strict()

export const user_role_assignmentFindFirstArgsSchema: z.ZodType<Prisma.user_role_assignmentFindFirstArgs> = z.object({
  select: user_role_assignmentSelectSchema.optional(),
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithRelationInputSchema.array(),user_role_assignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: user_role_assignmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ User_role_assignmentScalarFieldEnumSchema,User_role_assignmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default user_role_assignmentFindFirstArgsSchema;
