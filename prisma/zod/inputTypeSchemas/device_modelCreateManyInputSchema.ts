import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_modelCreateManyInputSchema: z.ZodType<Prisma.device_modelCreateManyInput> = z.object({
  device_model_id: z.number().int().optional(),
  model_name: z.string(),
  manufacturer: z.string(),
  color_support: z.number().int()
}).strict();

export default device_modelCreateManyInputSchema;
