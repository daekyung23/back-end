import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const option_modelUncheckedCreateInputSchema: z.ZodType<Prisma.option_modelUncheckedCreateInput> = z.object({
  option_model_id: z.number().int().optional(),
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string()
}).strict();

export default option_modelUncheckedCreateInputSchema;
