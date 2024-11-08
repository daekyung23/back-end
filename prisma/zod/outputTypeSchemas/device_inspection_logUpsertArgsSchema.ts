import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_inspection_logWhereUniqueInputSchema } from '../inputTypeSchemas/device_inspection_logWhereUniqueInputSchema'
import { device_inspection_logCreateInputSchema } from '../inputTypeSchemas/device_inspection_logCreateInputSchema'
import { device_inspection_logUncheckedCreateInputSchema } from '../inputTypeSchemas/device_inspection_logUncheckedCreateInputSchema'
import { device_inspection_logUpdateInputSchema } from '../inputTypeSchemas/device_inspection_logUpdateInputSchema'
import { device_inspection_logUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_inspection_logUncheckedUpdateInputSchema'
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

export const device_inspection_logUpsertArgsSchema: z.ZodType<Prisma.device_inspection_logUpsertArgs> = z.object({
  select: device_inspection_logSelectSchema.optional(),
  where: device_inspection_logWhereUniqueInputSchema,
  create: z.union([ device_inspection_logCreateInputSchema,device_inspection_logUncheckedCreateInputSchema ]),
  update: z.union([ device_inspection_logUpdateInputSchema,device_inspection_logUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_inspection_logUpsertArgsSchema;
