import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const option_modelCreateInputSchema: z.ZodType<Prisma.option_modelCreateInput> = z.object({
  option_model_name: z.string(),
  option_type: z.string(),
  manufacturer: z.string()
}).strict();

export default option_modelCreateInputSchema;
