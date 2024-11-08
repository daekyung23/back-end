import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateWhereInputSchema } from '../inputTypeSchemas/client_rateWhereInputSchema'
import { client_rateOrderByWithRelationInputSchema } from '../inputTypeSchemas/client_rateOrderByWithRelationInputSchema'
import { client_rateWhereUniqueInputSchema } from '../inputTypeSchemas/client_rateWhereUniqueInputSchema'

export const client_rateAggregateArgsSchema: z.ZodType<Prisma.client_rateAggregateArgs> = z.object({
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithRelationInputSchema.array(),client_rateOrderByWithRelationInputSchema ]).optional(),
  cursor: client_rateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default client_rateAggregateArgsSchema;
