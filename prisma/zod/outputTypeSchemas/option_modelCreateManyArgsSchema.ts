import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelCreateManyInputSchema } from '../inputTypeSchemas/option_modelCreateManyInputSchema'

export const option_modelCreateManyArgsSchema: z.ZodType<Prisma.option_modelCreateManyArgs> = z.object({
  data: z.union([ option_modelCreateManyInputSchema,option_modelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default option_modelCreateManyArgsSchema;
