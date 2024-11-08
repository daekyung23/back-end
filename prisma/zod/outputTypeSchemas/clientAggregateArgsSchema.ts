import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientWhereInputSchema } from '../inputTypeSchemas/clientWhereInputSchema'
import { clientOrderByWithRelationInputSchema } from '../inputTypeSchemas/clientOrderByWithRelationInputSchema'
import { clientWhereUniqueInputSchema } from '../inputTypeSchemas/clientWhereUniqueInputSchema'

export const clientAggregateArgsSchema: z.ZodType<Prisma.clientAggregateArgs> = z.object({
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithRelationInputSchema.array(),clientOrderByWithRelationInputSchema ]).optional(),
  cursor: clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default clientAggregateArgsSchema;
