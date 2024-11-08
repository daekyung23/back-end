import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_statusUncheckedCreateInputSchema: z.ZodType<Prisma.device_statusUncheckedCreateInput> = z.object({
  status_id: z.number().int().optional(),
  status_name: z.string()
}).strict();

export default device_statusUncheckedCreateInputSchema;
