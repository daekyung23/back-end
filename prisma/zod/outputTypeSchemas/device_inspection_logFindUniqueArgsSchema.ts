import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_inspection_logWhereUniqueInputSchema } from '../inputTypeSchemas/device_inspection_logWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_inspection_logSelectSchema: z.ZodType<Prisma.device_inspection_logSelect> = z.object({
  device_inspection_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  inspector_id: z.boolean().optional(),
  inspection_date: z.boolean().optional(),
  visit_type: z.boolean().optional(),
  call_id: z.boolean().optional(),
  FL: z.boolean().optional(),
  FS: z.boolean().optional(),
  BL: z.boolean().optional(),
  BS: z.boolean().optional(),
  toner_count_YE: z.boolean().optional(),
  toner_count_MA: z.boolean().optional(),
  toner_count_CY: z.boolean().optional(),
  toner_count_BK: z.boolean().optional(),
  toner_stock_YE: z.boolean().optional(),
  toner_stock_MA: z.boolean().optional(),
  toner_stock_CY: z.boolean().optional(),
  toner_stock_BK: z.boolean().optional(),
  toner_deliver_YE: z.boolean().optional(),
  toner_deliver_CY: z.boolean().optional(),
  toner_deliver_MA: z.boolean().optional(),
  toner_deliver_BK: z.boolean().optional(),
  drum_count_YE: z.boolean().optional(),
  drum_count_MA: z.boolean().optional(),
  drum_count_CY: z.boolean().optional(),
  drum_count_BK: z.boolean().optional(),
  drum_replacement_detail: z.boolean().optional(),
  status: z.boolean().optional(),
}).strict()

export const device_inspection_logFindUniqueArgsSchema: z.ZodType<Prisma.device_inspection_logFindUniqueArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereUniqueInputSchema,
}).strict() ;

export default device_inspection_logFindUniqueArgsSchema;
