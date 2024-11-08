import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_clientWhereInputSchema } from '../inputTypeSchemas/v_clientWhereInputSchema'
import { v_clientOrderByWithRelationInputSchema } from '../inputTypeSchemas/v_clientOrderByWithRelationInputSchema'
import { v_clientWhereUniqueInputSchema } from '../inputTypeSchemas/v_clientWhereUniqueInputSchema'

export const v_clientAggregateArgsSchema: z.ZodType<Prisma.v_clientAggregateArgs> = z.object({
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithRelationInputSchema.array(),v_clientOrderByWithRelationInputSchema ]).optional(),
  cursor: v_clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default v_clientAggregateArgsSchema;
