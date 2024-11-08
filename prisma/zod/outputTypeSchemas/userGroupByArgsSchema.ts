import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputSchema } from '../inputTypeSchemas/userWhereInputSchema'
import { userOrderByWithAggregationInputSchema } from '../inputTypeSchemas/userOrderByWithAggregationInputSchema'
import { UserScalarFieldEnumSchema } from '../inputTypeSchemas/UserScalarFieldEnumSchema'
import { userScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/userScalarWhereWithAggregatesInputSchema'

export const userGroupByArgsSchema: z.ZodType<Prisma.userGroupByArgs> = z.object({
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithAggregationInputSchema.array(),userOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: userScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default userGroupByArgsSchema;
