import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logCreateInputSchema } from '../inputTypeSchemas/device_location_logCreateInputSchema'
import { device_location_logUncheckedCreateInputSchema } from '../inputTypeSchemas/device_location_logUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_location_logSelectSchema: z.ZodType<Prisma.device_location_logSelect> = z.object({
  device_location_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  location_date: z.boolean().optional(),
  location_id: z.boolean().optional(),
  location_detail: z.boolean().optional(),
}).strict()

export const device_location_logCreateArgsSchema: z.ZodType<Prisma.device_location_logCreateArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  data: z.union([ device_location_logCreateInputSchema,device_location_logUncheckedCreateInputSchema ]),
}).strict() ;

export default device_location_logCreateArgsSchema;
