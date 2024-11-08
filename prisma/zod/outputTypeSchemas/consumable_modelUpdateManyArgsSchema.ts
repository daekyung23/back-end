import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelUpdateManyMutationInputSchema } from '../inputTypeSchemas/consumable_modelUpdateManyMutationInputSchema'
import { consumable_modelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/consumable_modelUncheckedUpdateManyInputSchema'
import { consumable_modelWhereInputSchema } from '../inputTypeSchemas/consumable_modelWhereInputSchema'

export const consumable_modelUpdateManyArgsSchema: z.ZodType<Prisma.consumable_modelUpdateManyArgs> = z.object({
  data: z.union([ consumable_modelUpdateManyMutationInputSchema,consumable_modelUncheckedUpdateManyInputSchema ]),
  where: consumable_modelWhereInputSchema.optional(),
}).strict() ;

export default consumable_modelUpdateManyArgsSchema;
