import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logWhereUniqueInputSchema } from '../inputTypeSchemas/device_location_logWhereUniqueInputSchema'
import { device_location_logCreateInputSchema } from '../inputTypeSchemas/device_location_logCreateInputSchema'
import { device_location_logUncheckedCreateInputSchema } from '../inputTypeSchemas/device_location_logUncheckedCreateInputSchema'
import { device_location_logUpdateInputSchema } from '../inputTypeSchemas/device_location_logUpdateInputSchema'
import { device_location_logUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_location_logUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_location_logSelectSchema: z.ZodType<Prisma.device_location_logSelect> = z.object({
  device_location_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  location_date: z.boolean().optional(),
  location_id: z.boolean().optional(),
  location_detail: z.boolean().optional(),
}).strict()

export const device_location_logUpsertArgsSchema: z.ZodType<Prisma.device_location_logUpsertArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereUniqueInputSchema,
  create: z.union([ device_location_logCreateInputSchema,device_location_logUncheckedCreateInputSchema ]),
  update: z.union([ device_location_logUpdateInputSchema,device_location_logUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_location_logUpsertArgsSchema;
