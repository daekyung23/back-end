import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_branchWhereInputSchema } from '../inputTypeSchemas/client_branchWhereInputSchema'
import { client_branchOrderByWithAggregationInputSchema } from '../inputTypeSchemas/client_branchOrderByWithAggregationInputSchema'
import { Client_branchScalarFieldEnumSchema } from '../inputTypeSchemas/Client_branchScalarFieldEnumSchema'
import { client_branchScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/client_branchScalarWhereWithAggregatesInputSchema'

export const client_branchGroupByArgsSchema: z.ZodType<Prisma.client_branchGroupByArgs> = z.object({
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithAggregationInputSchema.array(),client_branchOrderByWithAggregationInputSchema ]).optional(),
  by: Client_branchScalarFieldEnumSchema.array(),
  having: client_branchScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default client_branchGroupByArgsSchema;
