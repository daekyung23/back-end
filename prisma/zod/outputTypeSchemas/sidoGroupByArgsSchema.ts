import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoWhereInputSchema } from '../inputTypeSchemas/sidoWhereInputSchema'
import { sidoOrderByWithAggregationInputSchema } from '../inputTypeSchemas/sidoOrderByWithAggregationInputSchema'
import { SidoScalarFieldEnumSchema } from '../inputTypeSchemas/SidoScalarFieldEnumSchema'
import { sidoScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/sidoScalarWhereWithAggregatesInputSchema'

export const sidoGroupByArgsSchema: z.ZodType<Prisma.sidoGroupByArgs> = z.object({
  where: sidoWhereInputSchema.optional(),
  orderBy: z.union([ sidoOrderByWithAggregationInputSchema.array(),sidoOrderByWithAggregationInputSchema ]).optional(),
  by: SidoScalarFieldEnumSchema.array(),
  having: sidoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default sidoGroupByArgsSchema;
