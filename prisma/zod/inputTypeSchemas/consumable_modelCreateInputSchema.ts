import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const consumable_modelCreateInputSchema: z.ZodType<Prisma.consumable_modelCreateInput> = z.object({
  manufacturer: z.string(),
  consumable_name: z.string(),
  consumable_type: z.string()
}).strict();

export default consumable_modelCreateInputSchema;
