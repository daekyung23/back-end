import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const option_modelCreateManyInputSchema: z.ZodType<Prisma.option_modelCreateManyInput> = z.object({
  option_model_id: z.number().int().optional(),
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string()
}).strict();

export default option_modelCreateManyInputSchema;
