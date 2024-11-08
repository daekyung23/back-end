import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientUpdateManyMutationInputSchema } from '../inputTypeSchemas/clientUpdateManyMutationInputSchema'
import { clientUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/clientUncheckedUpdateManyInputSchema'
import { clientWhereInputSchema } from '../inputTypeSchemas/clientWhereInputSchema'

export const clientUpdateManyArgsSchema: z.ZodType<Prisma.clientUpdateManyArgs> = z.object({
  data: z.union([ clientUpdateManyMutationInputSchema,clientUncheckedUpdateManyInputSchema ]),
  where: clientWhereInputSchema.optional(),
}).strict() ;

export default clientUpdateManyArgsSchema;
