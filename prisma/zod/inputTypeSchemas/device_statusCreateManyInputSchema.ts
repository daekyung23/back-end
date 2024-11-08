import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_statusCreateManyInputSchema: z.ZodType<Prisma.device_statusCreateManyInput> = z.object({
  status_id: z.number().int().optional(),
  status_name: z.string()
}).strict();

export default device_statusCreateManyInputSchema;
