import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_branchUpdateManyMutationInputSchema } from '../inputTypeSchemas/client_branchUpdateManyMutationInputSchema'
import { client_branchUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/client_branchUncheckedUpdateManyInputSchema'
import { client_branchWhereInputSchema } from '../inputTypeSchemas/client_branchWhereInputSchema'

export const client_branchUpdateManyArgsSchema: z.ZodType<Prisma.client_branchUpdateManyArgs> = z.object({
  data: z.union([ client_branchUpdateManyMutationInputSchema,client_branchUncheckedUpdateManyInputSchema ]),
  where: client_branchWhereInputSchema.optional(),
}).strict() ;

export default client_branchUpdateManyArgsSchema;
