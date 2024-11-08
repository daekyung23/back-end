import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const device_statusSelectSchema: z.ZodType<Prisma.device_statusSelect> = z.object({
  status_id: z.boolean().optional(),
  status_name: z.boolean().optional(),
}).strict()

export default device_statusSelectSchema;
