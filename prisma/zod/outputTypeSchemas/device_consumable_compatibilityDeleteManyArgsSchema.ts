import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereInputSchema'

export const device_consumable_compatibilityDeleteManyArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityDeleteManyArgs> = z.object({
  where: device_consumable_compatibilityWhereInputSchema.optional(),
}).strict() ;

export default device_consumable_compatibilityDeleteManyArgsSchema;
