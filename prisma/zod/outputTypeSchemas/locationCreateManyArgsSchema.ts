import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationCreateManyInputSchema } from '../inputTypeSchemas/locationCreateManyInputSchema'

export const locationCreateManyArgsSchema: z.ZodType<Prisma.locationCreateManyArgs> = z.object({
  data: z.union([ locationCreateManyInputSchema,locationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default locationCreateManyArgsSchema;
