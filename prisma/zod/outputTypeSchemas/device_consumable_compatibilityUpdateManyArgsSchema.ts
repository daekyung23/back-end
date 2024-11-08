import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityUpdateManyMutationInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityUpdateManyMutationInputSchema'
import { device_consumable_compatibilityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityUncheckedUpdateManyInputSchema'
import { device_consumable_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereInputSchema'

export const device_consumable_compatibilityUpdateManyArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityUpdateManyArgs> = z.object({
  data: z.union([ device_consumable_compatibilityUpdateManyMutationInputSchema,device_consumable_compatibilityUncheckedUpdateManyInputSchema ]),
  where: device_consumable_compatibilityWhereInputSchema.optional(),
}).strict() ;

export default device_consumable_compatibilityUpdateManyArgsSchema;
