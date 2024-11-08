import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputSchema } from '../inputTypeSchemas/userWhereInputSchema'
import { userOrderByWithRelationInputSchema } from '../inputTypeSchemas/userOrderByWithRelationInputSchema'
import { userWhereUniqueInputSchema } from '../inputTypeSchemas/userWhereUniqueInputSchema'

export const userAggregateArgsSchema: z.ZodType<Prisma.userAggregateArgs> = z.object({
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default userAggregateArgsSchema;
