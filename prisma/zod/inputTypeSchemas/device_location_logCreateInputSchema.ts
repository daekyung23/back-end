import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_location_logCreateInputSchema: z.ZodType<Prisma.device_location_logCreateInput> = z.object({
  device_id: z.number().int(),
  location_date: z.coerce.date(),
  location_id: z.number().int(),
  location_detail: z.string().optional().nullable()
}).strict();

export default device_location_logCreateInputSchema;
