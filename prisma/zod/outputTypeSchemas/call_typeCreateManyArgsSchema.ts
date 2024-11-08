import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeCreateManyInputSchema } from '../inputTypeSchemas/call_typeCreateManyInputSchema'

export const call_typeCreateManyArgsSchema: z.ZodType<Prisma.call_typeCreateManyArgs> = z.object({
  data: z.union([ call_typeCreateManyInputSchema,call_typeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default call_typeCreateManyArgsSchema;
