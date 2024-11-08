import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentWhereInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereInputSchema'
import { user_role_assignmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/user_role_assignmentOrderByWithAggregationInputSchema'
import { User_role_assignmentScalarFieldEnumSchema } from '../inputTypeSchemas/User_role_assignmentScalarFieldEnumSchema'
import { user_role_assignmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/user_role_assignmentScalarWhereWithAggregatesInputSchema'

export const user_role_assignmentGroupByArgsSchema: z.ZodType<Prisma.user_role_assignmentGroupByArgs> = z.object({
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithAggregationInputSchema.array(),user_role_assignmentOrderByWithAggregationInputSchema ]).optional(),
  by: User_role_assignmentScalarFieldEnumSchema.array(),
  having: user_role_assignmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_role_assignmentGroupByArgsSchema;
