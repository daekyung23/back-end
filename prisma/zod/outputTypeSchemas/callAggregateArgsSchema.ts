import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { callWhereInputSchema } from '../inputTypeSchemas/callWhereInputSchema'
import { callOrderByWithRelationInputSchema } from '../inputTypeSchemas/callOrderByWithRelationInputSchema'
import { callWhereUniqueInputSchema } from '../inputTypeSchemas/callWhereUniqueInputSchema'

export const callAggregateArgsSchema: z.ZodType<Prisma.callAggregateArgs> = z.object({
  where: callWhereInputSchema.optional(),
  orderBy: z.union([ callOrderByWithRelationInputSchema.array(),callOrderByWithRelationInputSchema ]).optional(),
  cursor: callWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default callAggregateArgsSchema;
