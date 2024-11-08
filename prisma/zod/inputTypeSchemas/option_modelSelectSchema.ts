import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const option_modelSelectSchema: z.ZodType<Prisma.option_modelSelect> = z.object({
  option_model_id: z.boolean().optional(),
  option_model_name: z.boolean().optional(),
  option_type: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
}).strict()

export default option_modelSelectSchema;
