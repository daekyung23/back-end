import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_rateUpdateManyMutationInputSchema } from '../inputTypeSchemas/client_rateUpdateManyMutationInputSchema'
import { client_rateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/client_rateUncheckedUpdateManyInputSchema'
import { client_rateWhereInputSchema } from '../inputTypeSchemas/client_rateWhereInputSchema'

export const client_rateUpdateManyArgsSchema: z.ZodType<Prisma.client_rateUpdateManyArgs> = z.object({
  data: z.union([ client_rateUpdateManyMutationInputSchema,client_rateUncheckedUpdateManyInputSchema ]),
  where: client_rateWhereInputSchema.optional(),
}).strict() ;

export default client_rateUpdateManyArgsSchema;
