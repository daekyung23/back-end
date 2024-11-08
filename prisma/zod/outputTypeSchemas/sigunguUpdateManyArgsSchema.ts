import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguUpdateManyMutationInputSchema } from '../inputTypeSchemas/sigunguUpdateManyMutationInputSchema'
import { sigunguUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/sigunguUncheckedUpdateManyInputSchema'
import { sigunguWhereInputSchema } from '../inputTypeSchemas/sigunguWhereInputSchema'

export const sigunguUpdateManyArgsSchema: z.ZodType<Prisma.sigunguUpdateManyArgs> = z.object({
  data: z.union([ sigunguUpdateManyMutationInputSchema,sigunguUncheckedUpdateManyInputSchema ]),
  where: sigunguWhereInputSchema.optional(),
}).strict() ;

export default sigunguUpdateManyArgsSchema;
