import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_modelUpdateManyMutationInputSchema'
import { device_modelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_modelUncheckedUpdateManyInputSchema'
import { device_modelWhereInputSchema } from '../inputTypeSchemas/device_modelWhereInputSchema'

export const device_modelUpdateManyArgsSchema: z.ZodType<Prisma.device_modelUpdateManyArgs> = z.object({
  data: z.union([ device_modelUpdateManyMutationInputSchema,device_modelUncheckedUpdateManyInputSchema ]),
  where: device_modelWhereInputSchema.optional(),
}).strict() ;

export default device_modelUpdateManyArgsSchema;
