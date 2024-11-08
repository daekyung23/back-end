import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema: z.ZodType<Prisma.device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInput> = z.object({
  device_model_id: z.number(),
  option_model_id: z.number()
}).strict();

export default device_option_compatibilityDevice_model_idOption_model_idCompoundUniqueInputSchema;
