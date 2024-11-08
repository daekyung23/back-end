import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deviceUpdateManyMutationInputSchema } from '../inputTypeSchemas/deviceUpdateManyMutationInputSchema'
import { deviceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/deviceUncheckedUpdateManyInputSchema'
import { deviceWhereInputSchema } from '../inputTypeSchemas/deviceWhereInputSchema'

export const deviceUpdateManyArgsSchema: z.ZodType<Prisma.deviceUpdateManyArgs> = z.object({
  data: z.union([ deviceUpdateManyMutationInputSchema,deviceUncheckedUpdateManyInputSchema ]),
  where: deviceWhereInputSchema.optional(),
}).strict() ;

export default deviceUpdateManyArgsSchema;
