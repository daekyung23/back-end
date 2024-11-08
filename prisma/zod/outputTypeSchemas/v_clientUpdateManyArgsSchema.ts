import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_clientUpdateManyMutationInputSchema } from '../inputTypeSchemas/v_clientUpdateManyMutationInputSchema'
import { v_clientUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/v_clientUncheckedUpdateManyInputSchema'
import { v_clientWhereInputSchema } from '../inputTypeSchemas/v_clientWhereInputSchema'

export const v_clientUpdateManyArgsSchema: z.ZodType<Prisma.v_clientUpdateManyArgs> = z.object({
  data: z.union([ v_clientUpdateManyMutationInputSchema,v_clientUncheckedUpdateManyInputSchema ]),
  where: v_clientWhereInputSchema.optional(),
}).strict() ;

export default v_clientUpdateManyArgsSchema;
