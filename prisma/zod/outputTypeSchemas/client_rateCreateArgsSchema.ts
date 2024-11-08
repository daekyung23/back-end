import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateCreateInputSchema } from '../inputTypeSchemas/client_rateCreateInputSchema'
import { client_rateUncheckedCreateInputSchema } from '../inputTypeSchemas/client_rateUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const client_rateSelectSchema: z.ZodType<Prisma.client_rateSelect> = z.object({
  client_rate_id: z.boolean().optional(),
  rate_type: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
}).strict()

export const client_rateCreateArgsSchema: z.ZodType<Prisma.client_rateCreateArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  data: z.union([ client_rateCreateInputSchema,client_rateUncheckedCreateInputSchema ]),
}).strict() ;

export default client_rateCreateArgsSchema;
