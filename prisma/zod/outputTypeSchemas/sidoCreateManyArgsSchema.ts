import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sidoCreateManyInputSchema } from '../inputTypeSchemas/sidoCreateManyInputSchema'

export const sidoCreateManyArgsSchema: z.ZodType<Prisma.sidoCreateManyArgs> = z.object({
  data: z.union([ sidoCreateManyInputSchema,sidoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default sidoCreateManyArgsSchema;
