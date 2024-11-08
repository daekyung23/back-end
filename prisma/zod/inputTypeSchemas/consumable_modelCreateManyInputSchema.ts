import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const consumable_modelCreateManyInputSchema: z.ZodType<Prisma.consumable_modelCreateManyInput> = z.object({
  consumable_model_id: z.number().int().optional(),
  manufacturer: z.string(),
  consumable_name: z.string(),
  consumable_type: z.string()
}).strict();

export default consumable_modelCreateManyInputSchema;
