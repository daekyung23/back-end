import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateCreateManyInputSchema } from '../inputTypeSchemas/client_rateCreateManyInputSchema'

export const client_rateCreateManyArgsSchema: z.ZodType<Prisma.client_rateCreateManyArgs> = z.object({
  data: z.union([ client_rateCreateManyInputSchema,client_rateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default client_rateCreateManyArgsSchema;
