import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { callWhereInputSchema } from '../inputTypeSchemas/callWhereInputSchema'
import { callOrderByWithAggregationInputSchema } from '../inputTypeSchemas/callOrderByWithAggregationInputSchema'
import { CallScalarFieldEnumSchema } from '../inputTypeSchemas/CallScalarFieldEnumSchema'
import { callScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/callScalarWhereWithAggregatesInputSchema'

export const callGroupByArgsSchema: z.ZodType<Prisma.callGroupByArgs> = z.object({
  where: callWhereInputSchema.optional(),
  orderBy: z.union([ callOrderByWithAggregationInputSchema.array(),callOrderByWithAggregationInputSchema ]).optional(),
  by: CallScalarFieldEnumSchema.array(),
  having: callScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default callGroupByArgsSchema;
