import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_location_logUncheckedCreateInputSchema: z.ZodType<Prisma.device_location_logUncheckedCreateInput> = z.object({
  device_location_log_id: z.number().int().optional(),
  device_id: z.number().int(),
  location_date: z.coerce.date(),
  location_id: z.number().int(),
  location_detail: z.string().optional().nullable()
}).strict();

export default device_location_logUncheckedCreateInputSchema;
