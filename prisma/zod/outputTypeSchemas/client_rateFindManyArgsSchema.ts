import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateWhereInputSchema } from '../inputTypeSchemas/client_rateWhereInputSchema'
import { client_rateOrderByWithRelationInputSchema } from '../inputTypeSchemas/client_rateOrderByWithRelationInputSchema'
import { client_rateWhereUniqueInputSchema } from '../inputTypeSchemas/client_rateWhereUniqueInputSchema'
import { Client_rateScalarFieldEnumSchema } from '../inputTypeSchemas/Client_rateScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const client_rateSelectSchema: z.ZodType<Prisma.client_rateSelect> = z.object({
  client_rate_id: z.boolean().optional(),
  rate_type: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
}).strict()

export const client_rateFindManyArgsSchema: z.ZodType<Prisma.client_rateFindManyArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereInputSchema.optional(),
  orderBy: z.union([ client_rateOrderByWithRelationInputSchema.array(),client_rateOrderByWithRelationInputSchema ]).optional(),
  cursor: client_rateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_rateScalarFieldEnumSchema,Client_rateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default client_rateFindManyArgsSchema;
