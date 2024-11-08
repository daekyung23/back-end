import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_option_compatibilityUncheckedCreateInputSchema: z.ZodType<Prisma.device_option_compatibilityUncheckedCreateInput> = z.object({
  device_model_id: z.number().int(),
  option_model_id: z.number().int()
}).strict();

export default device_option_compatibilityUncheckedCreateInputSchema;
