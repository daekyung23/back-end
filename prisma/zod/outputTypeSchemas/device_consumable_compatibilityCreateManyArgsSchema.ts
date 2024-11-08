import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityCreateManyInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityCreateManyInputSchema'

export const device_consumable_compatibilityCreateManyArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityCreateManyArgs> = z.object({
  data: z.union([ device_consumable_compatibilityCreateManyInputSchema,device_consumable_compatibilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default device_consumable_compatibilityCreateManyArgsSchema;
