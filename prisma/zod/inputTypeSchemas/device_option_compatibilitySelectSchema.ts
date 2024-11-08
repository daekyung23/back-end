import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const device_option_compatibilitySelectSchema: z.ZodType<Prisma.device_option_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
}).strict()

export default device_option_compatibilitySelectSchema;
