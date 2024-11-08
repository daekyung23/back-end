import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateWhereUniqueInputSchema } from '../inputTypeSchemas/client_rateWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const client_rateSelectSchema: z.ZodType<Prisma.client_rateSelect> = z.object({
  client_rate_id: z.boolean().optional(),
  rate_type: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
}).strict()

export const client_rateDeleteArgsSchema: z.ZodType<Prisma.client_rateDeleteArgs> = z.object({
  select: client_rateSelectSchema.optional(),
  where: client_rateWhereUniqueInputSchema,
}).strict() ;

export default client_rateDeleteArgsSchema;
