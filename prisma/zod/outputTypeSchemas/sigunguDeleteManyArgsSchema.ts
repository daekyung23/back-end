import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguWhereInputSchema } from '../inputTypeSchemas/sigunguWhereInputSchema'

export const sigunguDeleteManyArgsSchema: z.ZodType<Prisma.sigunguDeleteManyArgs> = z.object({
  where: sigunguWhereInputSchema.optional(),
}).strict() ;

export default sigunguDeleteManyArgsSchema;
