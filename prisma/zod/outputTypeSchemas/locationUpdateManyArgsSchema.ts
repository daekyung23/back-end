import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationUpdateManyMutationInputSchema } from '../inputTypeSchemas/locationUpdateManyMutationInputSchema'
import { locationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/locationUncheckedUpdateManyInputSchema'
import { locationWhereInputSchema } from '../inputTypeSchemas/locationWhereInputSchema'

export const locationUpdateManyArgsSchema: z.ZodType<Prisma.locationUpdateManyArgs> = z.object({
  data: z.union([ locationUpdateManyMutationInputSchema,locationUncheckedUpdateManyInputSchema ]),
  where: locationWhereInputSchema.optional(),
}).strict() ;

export default locationUpdateManyArgsSchema;
