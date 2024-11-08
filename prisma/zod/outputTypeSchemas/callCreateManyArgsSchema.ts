import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { callCreateManyInputSchema } from '../inputTypeSchemas/callCreateManyInputSchema'

export const callCreateManyArgsSchema: z.ZodType<Prisma.callCreateManyArgs> = z.object({
  data: z.union([ callCreateManyInputSchema,callCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default callCreateManyArgsSchema;
