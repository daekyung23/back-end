import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoWhereInputSchema } from '../inputTypeSchemas/sidoWhereInputSchema'

export const sidoDeleteManyArgsSchema: z.ZodType<Prisma.sidoDeleteManyArgs> = z.object({
  where: sidoWhereInputSchema.optional(),
}).strict() ;

export default sidoDeleteManyArgsSchema;
