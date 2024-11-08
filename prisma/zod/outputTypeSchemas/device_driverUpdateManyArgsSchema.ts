import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_driverUpdateManyMutationInputSchema'
import { device_driverUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_driverUncheckedUpdateManyInputSchema'
import { device_driverWhereInputSchema } from '../inputTypeSchemas/device_driverWhereInputSchema'

export const device_driverUpdateManyArgsSchema: z.ZodType<Prisma.device_driverUpdateManyArgs> = z.object({
  data: z.union([ device_driverUpdateManyMutationInputSchema,device_driverUncheckedUpdateManyInputSchema ]),
  where: device_driverWhereInputSchema.optional(),
}).strict() ;

export default device_driverUpdateManyArgsSchema;
