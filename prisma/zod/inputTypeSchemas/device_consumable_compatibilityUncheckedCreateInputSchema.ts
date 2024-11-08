import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_consumable_compatibilityUncheckedCreateInputSchema: z.ZodType<Prisma.device_consumable_compatibilityUncheckedCreateInput> = z.object({
  device_model_id: z.number().int(),
  consumable_model_id: z.number().int()
}).strict();

export default device_consumable_compatibilityUncheckedCreateInputSchema;
