import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeWhereInputSchema } from '../inputTypeSchemas/call_typeWhereInputSchema'
import { call_typeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/call_typeOrderByWithAggregationInputSchema'
import { Call_typeScalarFieldEnumSchema } from '../inputTypeSchemas/Call_typeScalarFieldEnumSchema'
import { call_typeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/call_typeScalarWhereWithAggregatesInputSchema'

export const call_typeGroupByArgsSchema: z.ZodType<Prisma.call_typeGroupByArgs> = z.object({
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithAggregationInputSchema.array(),call_typeOrderByWithAggregationInputSchema ]).optional(),
  by: Call_typeScalarFieldEnumSchema.array(),
  having: call_typeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default call_typeGroupByArgsSchema;
