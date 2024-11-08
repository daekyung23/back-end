import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_option_compatibilityUpdateManyMutationInputSchema'
import { device_option_compatibilityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_option_compatibilityUncheckedUpdateManyInputSchema'
import { device_option_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereInputSchema'

export const device_option_compatibilityUpdateManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityUpdateManyArgs> = z.object({
  data: z.union([ device_option_compatibilityUpdateManyMutationInputSchema,device_option_compatibilityUncheckedUpdateManyInputSchema ]),
  where: device_option_compatibilityWhereInputSchema.optional(),
}).strict() ;

export default device_option_compatibilityUpdateManyArgsSchema;
