import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereUniqueInputSchema'
import { device_consumable_compatibilityCreateInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityCreateInputSchema'
import { device_consumable_compatibilityUncheckedCreateInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityUncheckedCreateInputSchema'
import { device_consumable_compatibilityUpdateInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityUpdateInputSchema'
import { device_consumable_compatibilityUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_consumable_compatibilitySelectSchema: z.ZodType<Prisma.device_consumable_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  consumable_model_id: z.boolean().optional(),
}).strict()

export const device_consumable_compatibilityUpsertArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityUpsertArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereUniqueInputSchema,
  create: z.union([ device_consumable_compatibilityCreateInputSchema,device_consumable_compatibilityUncheckedCreateInputSchema ]),
  update: z.union([ device_consumable_compatibilityUpdateInputSchema,device_consumable_compatibilityUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_consumable_compatibilityUpsertArgsSchema;
