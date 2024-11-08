import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientCreateManyInputSchema } from '../inputTypeSchemas/clientCreateManyInputSchema'

export const clientCreateManyArgsSchema: z.ZodType<Prisma.clientCreateManyArgs> = z.object({
  data: z.union([ clientCreateManyInputSchema,clientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default clientCreateManyArgsSchema;
