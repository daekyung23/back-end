import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logWhereUniqueInputSchema } from '../inputTypeSchemas/device_location_logWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_location_logSelectSchema: z.ZodType<Prisma.device_location_logSelect> = z.object({
  device_location_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  location_date: z.boolean().optional(),
  location_id: z.boolean().optional(),
  location_detail: z.boolean().optional(),
}).strict()

export const device_location_logFindUniqueArgsSchema: z.ZodType<Prisma.device_location_logFindUniqueArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereUniqueInputSchema,
}).strict() ;

export default device_location_logFindUniqueArgsSchema;
