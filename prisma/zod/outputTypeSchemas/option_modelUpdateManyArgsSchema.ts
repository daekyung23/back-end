import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelUpdateManyMutationInputSchema } from '../inputTypeSchemas/option_modelUpdateManyMutationInputSchema'
import { option_modelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/option_modelUncheckedUpdateManyInputSchema'
import { option_modelWhereInputSchema } from '../inputTypeSchemas/option_modelWhereInputSchema'

export const option_modelUpdateManyArgsSchema: z.ZodType<Prisma.option_modelUpdateManyArgs> = z.object({
  data: z.union([ option_modelUpdateManyMutationInputSchema,option_modelUncheckedUpdateManyInputSchema ]),
  where: option_modelWhereInputSchema.optional(),
}).strict() ;

export default option_modelUpdateManyArgsSchema;
