import { z } from 'zod';
import { device_inspection_log_statusSchema } from '../inputTypeSchemas/device_inspection_log_statusSchema'

/////////////////////////////////////////
// DEVICE INSPECTION LOG SCHEMA
/////////////////////////////////////////

export const device_inspection_logSchema = z.object({
  status: device_inspection_log_statusSchema.nullable(),
  device_inspection_log_id: z.number().int(),
  device_id: z.number().int(),
  inspector_id: z.number().int(),
  inspection_date: z.coerce.date(),
  visit_type: z.string(),
  call_id: z.number().int().nullable(),
  FL: z.number().int().nullable(),
  FS: z.number().int().nullable(),
  BL: z.number().int().nullable(),
  BS: z.number().int().nullable(),
  toner_count_YE: z.number().int().nullable(),
  toner_count_MA: z.number().int().nullable(),
  toner_count_CY: z.number().int().nullable(),
  toner_count_BK: z.number().int().nullable(),
  toner_stock_YE: z.number().int().nullable(),
  toner_stock_MA: z.number().int().nullable(),
  toner_stock_CY: z.number().int().nullable(),
  toner_stock_BK: z.number().int().nullable(),
  toner_deliver_YE: z.number().int().nullable(),
  toner_deliver_CY: z.number().int().nullable(),
  toner_deliver_MA: z.number().int().nullable(),
  toner_deliver_BK: z.number().int().nullable(),
  drum_count_YE: z.number().int().nullable(),
  drum_count_MA: z.number().int().nullable(),
  drum_count_CY: z.number().int().nullable(),
  drum_count_BK: z.number().int().nullable(),
  drum_replacement_detail: z.string().nullable(),
})

export type device_inspection_log = z.infer<typeof device_inspection_logSchema>

export default device_inspection_logSchema;
