import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_clientCreateManyInputSchema } from '../inputTypeSchemas/v_clientCreateManyInputSchema'

export const v_clientCreateManyArgsSchema: z.ZodType<Prisma.v_clientCreateManyArgs> = z.object({
  data: z.union([ v_clientCreateManyInputSchema,v_clientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default v_clientCreateManyArgsSchema;
