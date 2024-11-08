import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeUpdateManyMutationInputSchema } from '../inputTypeSchemas/call_typeUpdateManyMutationInputSchema'
import { call_typeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/call_typeUncheckedUpdateManyInputSchema'
import { call_typeWhereInputSchema } from '../inputTypeSchemas/call_typeWhereInputSchema'

export const call_typeUpdateManyArgsSchema: z.ZodType<Prisma.call_typeUpdateManyArgs> = z.object({
  data: z.union([ call_typeUpdateManyMutationInputSchema,call_typeUncheckedUpdateManyInputSchema ]),
  where: call_typeWhereInputSchema.optional(),
}).strict() ;

export default call_typeUpdateManyArgsSchema;
