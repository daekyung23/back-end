import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateWhereInputSchema } from '../inputTypeSchemas/client_rateWhereInputSchema'
import { client_rateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/client_rateOrderByWithAggregationInputSchema'
import { Client_rateScalarFieldEnumSchema } from '../inputTypeSchemas/Client_rateScalarFieldEnumSchema'
import { client_rateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/client_rateScalarWhereWithAggregatesInputSchema'

export const client_rateGroupByArgsSchema: z.ZodType<Prisma.client_rateGroupByArgs> = z.object({
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithAggregationInputSchema.array(),client_rateOrderByWithAggregationInputSchema ]).optional(),
  by: Client_rateScalarFieldEnumSchema.array(),
  having: client_rateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default client_rateGroupByArgsSchema;
