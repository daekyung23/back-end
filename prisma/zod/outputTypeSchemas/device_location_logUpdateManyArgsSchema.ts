import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_location_logUpdateManyMutationInputSchema'
import { device_location_logUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_location_logUncheckedUpdateManyInputSchema'
import { device_location_logWhereInputSchema } from '../inputTypeSchemas/device_location_logWhereInputSchema'

export const device_location_logUpdateManyArgsSchema: z.ZodType<Prisma.device_location_logUpdateManyArgs> = z.object({
  data: z.union([ device_location_logUpdateManyMutationInputSchema,device_location_logUncheckedUpdateManyInputSchema ]),
  where: device_location_logWhereInputSchema.optional(),
}).strict() ;

export default device_location_logUpdateManyArgsSchema;
