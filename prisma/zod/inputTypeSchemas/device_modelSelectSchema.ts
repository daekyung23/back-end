import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const device_modelSelectSchema: z.ZodType<Prisma.device_modelSelect> = z.object({
  device_model_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

export default device_modelSelectSchema;
