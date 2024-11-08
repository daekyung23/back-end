import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateWhereUniqueInputSchema } from '../inputTypeSchemas/client_rateWhereUniqueInputSchema'
import { client_rateCreateInputSchema } from '../inputTypeSchemas/client_rateCreateInputSchema'
import { client_rateUncheckedCreateInputSchema } from '../inputTypeSchemas/client_rateUncheckedCreateInputSchema'
import { client_rateUpdateInputSchema } from '../inputTypeSchemas/client_rateUpdateInputSchema'
import { client_rateUncheckedUpdateInputSchema } from '../inputTypeSchemas/client_rateUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const client_rateSelectSchema: z.ZodType<Prisma.client_rateSelect> = z.object({
  client_rate_id: z.boolean().optional(),
  rate_type: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
}).strict()

export const client_rateUpsertArgsSchema: z.ZodType<Prisma.client_rateUpsertArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereUniqueInputSchema,
  create: z.union([ client_rateCreateInputSchema,client_rateUncheckedCreateInputSchema ]),
  update: z.union([ client_rateUpdateInputSchema,client_rateUncheckedUpdateInputSchema ]),
}).strict() ;

export default client_rateUpsertArgsSchema;
