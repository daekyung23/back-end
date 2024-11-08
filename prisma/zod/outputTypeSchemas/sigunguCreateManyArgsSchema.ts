import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguCreateManyInputSchema } from '../inputTypeSchemas/sigunguCreateManyInputSchema'

export const sigunguCreateManyArgsSchema: z.ZodType<Prisma.sigunguCreateManyArgs> = z.object({
  data: z.union([ sigunguCreateManyInputSchema,sigunguCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default sigunguCreateManyArgsSchema;
