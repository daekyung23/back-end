import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const device_location_logSelectSchema: z.ZodType<Prisma.device_location_logSelect> = z.object({
  device_location_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  location_date: z.boolean().optional(),
  location_id: z.boolean().optional(),
  location_detail: z.boolean().optional(),
}).strict()

export default device_location_logSelectSchema;
