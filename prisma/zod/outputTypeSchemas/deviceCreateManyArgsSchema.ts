import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deviceCreateManyInputSchema } from '../inputTypeSchemas/deviceCreateManyInputSchema'

export const deviceCreateManyArgsSchema: z.ZodType<Prisma.deviceCreateManyArgs> = z.object({
  data: z.union([ deviceCreateManyInputSchema,deviceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default deviceCreateManyArgsSchema;
