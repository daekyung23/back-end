import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_consumable_compatibilityCreateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityCreateInput> = z.object({
  device_model_id: z.number().int(),
  consumable_model_id: z.number().int()
}).strict();

export default device_consumable_compatibilityCreateInputSchema;
