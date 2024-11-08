import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_positionWhereInputSchema } from '../inputTypeSchemas/user_positionWhereInputSchema'
import { user_positionOrderByWithRelationInputSchema } from '../inputTypeSchemas/user_positionOrderByWithRelationInputSchema'
import { user_positionWhereUniqueInputSchema } from '../inputTypeSchemas/user_positionWhereUniqueInputSchema'

export const user_positionAggregateArgsSchema: z.ZodType<Prisma.user_positionAggregateArgs> = z.object({
  where: user_positionWhereInputSchema.optional(),
  orderBy: z.union([ user_positionOrderByWithRelationInputSchema.array(),user_positionOrderByWithRelationInputSchema ]).optional(),
  cursor: user_positionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default user_positionAggregateArgsSchema;
