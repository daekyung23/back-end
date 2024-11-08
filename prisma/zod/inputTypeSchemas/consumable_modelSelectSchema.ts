import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const consumable_modelSelectSchema: z.ZodType<Prisma.consumable_modelSelect> = z.object({
  consumable_model_id: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  consumable_name: z.boolean().optional(),
  consumable_type: z.boolean().optional(),
}).strict()

export default consumable_modelSelectSchema;
