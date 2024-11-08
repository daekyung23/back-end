import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityCreateInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityCreateInputSchema'
import { device_consumable_compatibilityUncheckedCreateInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_consumable_compatibilitySelectSchema: z.ZodType<Prisma.device_consumable_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  consumable_model_id: z.boolean().optional(),
}).strict()

export const device_consumable_compatibilityCreateArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityCreateArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  data: z.union([ device_consumable_compatibilityCreateInputSchema,device_consumable_compatibilityUncheckedCreateInputSchema ]),
}).strict() ;

export default device_consumable_compatibilityCreateArgsSchema;
