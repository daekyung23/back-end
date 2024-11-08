import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientWhereInputSchema } from '../inputTypeSchemas/clientWhereInputSchema'
import { clientOrderByWithAggregationInputSchema } from '../inputTypeSchemas/clientOrderByWithAggregationInputSchema'
import { ClientScalarFieldEnumSchema } from '../inputTypeSchemas/ClientScalarFieldEnumSchema'
import { clientScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/clientScalarWhereWithAggregatesInputSchema'

export const clientGroupByArgsSchema: z.ZodType<Prisma.clientGroupByArgs> = z.object({
  where: clientWhereInputSchema.optional(),
  orderBy: z.union([ clientOrderByWithAggregationInputSchema.array(),clientOrderByWithAggregationInputSchema ]).optional(),
  by: ClientScalarFieldEnumSchema.array(),
  having: clientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default clientGroupByArgsSchema;
