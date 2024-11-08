import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const deviceUncheckedCreateInputSchema: z.ZodType<Prisma.deviceUncheckedCreateInput> = z.object({
  device_id: z.number().int().optional(),
  device_model_id: z.number().int(),
  owner_dept_id: z.number().int(),
  mgmt_dept_id: z.number().int(),
  serial: z.string(),
  regi_date: z.coerce.date(),
  mac: z.string(),
  last_inspection_log_id: z.number().int().optional().nullable(),
  last_location_log_id: z.number().int().optional().nullable(),
  status_id: z.number().int().optional()
}).strict();

export default deviceUncheckedCreateInputSchema;
