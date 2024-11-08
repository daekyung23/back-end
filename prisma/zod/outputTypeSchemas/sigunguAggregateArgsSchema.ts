import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguWhereInputSchema } from '../inputTypeSchemas/sigunguWhereInputSchema'
import { sigunguOrderByWithRelationInputSchema } from '../inputTypeSchemas/sigunguOrderByWithRelationInputSchema'
import { sigunguWhereUniqueInputSchema } from '../inputTypeSchemas/sigunguWhereUniqueInputSchema'

export const sigunguAggregateArgsSchema: z.ZodType<Prisma.sigunguAggregateArgs> = z.object({
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithRelationInputSchema.array(),sigunguOrderByWithRelationInputSchema ]).optional(),
  cursor: sigunguWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default sigunguAggregateArgsSchema;
