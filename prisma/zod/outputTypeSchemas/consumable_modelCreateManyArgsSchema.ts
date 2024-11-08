import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelCreateManyInputSchema } from '../inputTypeSchemas/consumable_modelCreateManyInputSchema'

export const consumable_modelCreateManyArgsSchema: z.ZodType<Prisma.consumable_modelCreateManyArgs> = z.object({
  data: z.union([ consumable_modelCreateManyInputSchema,consumable_modelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default consumable_modelCreateManyArgsSchema;
