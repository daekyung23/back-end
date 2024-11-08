import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_statusUpdateManyMutationInputSchema'
import { device_statusUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_statusUncheckedUpdateManyInputSchema'
import { device_statusWhereInputSchema } from '../inputTypeSchemas/device_statusWhereInputSchema'

export const device_statusUpdateManyArgsSchema: z.ZodType<Prisma.device_statusUpdateManyArgs> = z.object({
  data: z.union([ device_statusUpdateManyMutationInputSchema,device_statusUncheckedUpdateManyInputSchema ]),
  where: device_statusWhereInputSchema.optional(),
}).strict() ;

export default device_statusUpdateManyArgsSchema;
