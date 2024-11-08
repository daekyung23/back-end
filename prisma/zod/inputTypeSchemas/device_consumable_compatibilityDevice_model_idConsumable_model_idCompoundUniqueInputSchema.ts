import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema: z.ZodType<Prisma.device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInput> = z.object({
  device_model_id: z.number(),
  consumable_model_id: z.number()
}).strict();

export default device_consumable_compatibilityDevice_model_idConsumable_model_idCompoundUniqueInputSchema;
