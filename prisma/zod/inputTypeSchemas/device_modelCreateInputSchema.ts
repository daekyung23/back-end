import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_modelCreateInputSchema: z.ZodType<Prisma.device_modelCreateInput> = z.object({
  model_name: z.string(),
  manufacturer: z.string(),
  color_support: z.number().int()
}).strict();

export default device_modelCreateInputSchema;
