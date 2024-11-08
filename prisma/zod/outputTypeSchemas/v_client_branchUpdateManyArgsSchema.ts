import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_client_branchUpdateManyMutationInputSchema } from '../inputTypeSchemas/v_client_branchUpdateManyMutationInputSchema'
import { v_client_branchUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/v_client_branchUncheckedUpdateManyInputSchema'
import { v_client_branchWhereInputSchema } from '../inputTypeSchemas/v_client_branchWhereInputSchema'

export const v_client_branchUpdateManyArgsSchema: z.ZodType<Prisma.v_client_branchUpdateManyArgs> = z.object({
  data: z.union([ v_client_branchUpdateManyMutationInputSchema,v_client_branchUncheckedUpdateManyInputSchema ]),
  where: v_client_branchWhereInputSchema.optional(),
}).strict() ;

export default v_client_branchUpdateManyArgsSchema;
