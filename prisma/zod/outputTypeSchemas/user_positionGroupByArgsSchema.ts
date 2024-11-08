import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionWhereInputSchema } from '../inputTypeSchemas/user_positionWhereInputSchema'
import { user_positionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/user_positionOrderByWithAggregationInputSchema'
import { User_positionScalarFieldEnumSchema } from '../inputTypeSchemas/User_positionScalarFieldEnumSchema'
import { user_positionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/user_positionScalarWhereWithAggregatesInputSchema'

export const user_positionGroupByArgsSchema: z.ZodType<Prisma.user_positionGroupByArgs> = z.object({
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithAggregationInputSchema.array(),user_positionOrderByWithAggregationInputSchema ]).optional(),
  by: User_positionScalarFieldEnumSchema.array(),
  having: user_positionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_positionGroupByArgsSchema;
