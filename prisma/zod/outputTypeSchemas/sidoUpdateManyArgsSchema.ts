import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoUpdateManyMutationInputSchema } from '../inputTypeSchemas/sidoUpdateManyMutationInputSchema'
import { sidoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/sidoUncheckedUpdateManyInputSchema'
import { sidoWhereInputSchema } from '../inputTypeSchemas/sidoWhereInputSchema'

export const sidoUpdateManyArgsSchema: z.ZodType<Prisma.sidoUpdateManyArgs> = z.object({
  data: z.union([ sidoUpdateManyMutationInputSchema,sidoUncheckedUpdateManyInputSchema ]),
  where: sidoWhereInputSchema.optional(),
}).strict() ;

export default sidoUpdateManyArgsSchema;
