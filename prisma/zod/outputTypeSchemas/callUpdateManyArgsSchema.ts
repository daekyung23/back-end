import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { callUpdateManyMutationInputSchema } from '../inputTypeSchemas/callUpdateManyMutationInputSchema'
import { callUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/callUncheckedUpdateManyInputSchema'
import { callWhereInputSchema } from '../inputTypeSchemas/callWhereInputSchema'

export const callUpdateManyArgsSchema: z.ZodType<Prisma.callUpdateManyArgs> = z.object({
  data: z.union([ callUpdateManyMutationInputSchema,callUncheckedUpdateManyInputSchema ]),
  where: callWhereInputSchema.optional(),
}).strict() ;

export default callUpdateManyArgsSchema;
