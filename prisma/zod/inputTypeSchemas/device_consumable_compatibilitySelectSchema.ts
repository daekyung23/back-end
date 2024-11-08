import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const device_consumable_compatibilitySelectSchema: z.ZodType<Prisma.device_consumable_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  consumable_model_id: z.boolean().optional(),
}).strict()

export default device_consumable_compatibilitySelectSchema;
