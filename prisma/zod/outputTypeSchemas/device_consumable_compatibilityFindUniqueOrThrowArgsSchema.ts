import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_consumable_compatibilitySelectSchema: z.ZodType<Prisma.device_consumable_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  consumable_model_id: z.boolean().optional(),
}).strict()

export const device_consumable_compatibilityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityFindUniqueOrThrowArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereUniqueInputSchema,
}).strict() ;

export default device_consumable_compatibilityFindUniqueOrThrowArgsSchema;
