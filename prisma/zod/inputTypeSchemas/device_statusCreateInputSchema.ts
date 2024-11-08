import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_statusCreateInputSchema: z.ZodType<Prisma.device_statusCreateInput> = z.object({
  status_name: z.string()
}).strict();

export default device_statusCreateInputSchema;
