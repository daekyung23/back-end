import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoWhereInputSchema } from '../inputTypeSchemas/sidoWhereInputSchema'
import { sidoOrderByWithRelationInputSchema } from '../inputTypeSchemas/sidoOrderByWithRelationInputSchema'
import { sidoWhereUniqueInputSchema } from '../inputTypeSchemas/sidoWhereUniqueInputSchema'

export const sidoAggregateArgsSchema: z.ZodType<Prisma.sidoAggregateArgs> = z.object({
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithRelationInputSchema.array(),sidoOrderByWithRelationInputSchema ]).optional(),
  cursor: sidoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default sidoAggregateArgsSchema;
