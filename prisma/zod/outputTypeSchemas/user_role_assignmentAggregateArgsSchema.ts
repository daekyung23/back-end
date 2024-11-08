import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_role_assignmentWhereInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereInputSchema'
import { user_role_assignmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_role_assignmentOrderByWithRelationInputSchema'
import { user_role_assignmentWhereUniqueInputSchema } from '../inputTypeSchemas/user_role_assignmentWhereUniqueInputSchema'

export const user_role_assignmentAggregateArgsSchema: z.ZodType<Prisma.user_role_assignmentAggregateArgs> = z.object({
  where: user_role_assignmentWhereInputSchema.optional(),
  orderBy: z.union([ user_role_assignmentOrderByWithRelationInputSchema.array(),user_role_assignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: user_role_assignmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_role_assignmentAggregateArgsSchema;
