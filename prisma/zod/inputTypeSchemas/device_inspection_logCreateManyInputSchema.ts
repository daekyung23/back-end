import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_inspection_log_statusSchema } from './device_inspection_log_statusSchema';

export const device_inspection_logCreateManyInputSchema: z.ZodType<Prisma.device_inspection_logCreateManyInput> = z.object({
  device_inspection_log_id: z.number().int().optional(),
  device_id: z.number().int(),
  inspector_id: z.number().int(),
  inspection_date: z.coerce.date(),
  visit_type: z.string(),
  call_id: z.number().int().optional().nullable(),
  FL: z.number().int().optional().nullable(),
  FS: z.number().int().optional().nullable(),
  BL: z.number().int().optional().nullable(),
  BS: z.number().int().optional().nullable(),
  toner_count_YE: z.number().int().optional().nullable(),
  toner_count_MA: z.number().int().optional().nullable(),
  toner_count_CY: z.number().int().optional().nullable(),
  toner_count_BK: z.number().int().optional().nullable(),
  toner_stock_YE: z.number().int().optional().nullable(),
  toner_stock_MA: z.number().int().optional().nullable(),
  toner_stock_CY: z.number().int().optional().nullable(),
  toner_stock_BK: z.number().int().optional().nullable(),
  toner_deliver_YE: z.number().int().optional().nullable(),
  toner_deliver_CY: z.number().int().optional().nullable(),
  toner_deliver_MA: z.number().int().optional().nullable(),
  toner_deliver_BK: z.number().int().optional().nullable(),
  drum_count_YE: z.number().int().optional().nullable(),
  drum_count_MA: z.number().int().optional().nullable(),
  drum_count_CY: z.number().int().optional().nullable(),
  drum_count_BK: z.number().int().optional().nullable(),
  drum_replacement_detail: z.string().optional().nullable(),
  status: z.lazy(() => device_inspection_log_statusSchema).optional().nullable()
}).strict();

export default device_inspection_logCreateManyInputSchema;
