import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logWhereInputSchema } from '../inputTypeSchemas/device_location_logWhereInputSchema'
import { device_location_logOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_location_logOrderByWithRelationInputSchema'
import { device_location_logWhereUniqueInputSchema } from '../inputTypeSchemas/device_location_logWhereUniqueInputSchema'
import { Device_location_logScalarFieldEnumSchema } from '../inputTypeSchemas/Device_location_logScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_location_logSelectSchema: z.ZodType<Prisma.device_location_logSelect> = z.object({
  device_location_log_id: z.boolean().optional(),
  device_id: z.boolean().optional(),
  location_date: z.boolean().optional(),
  location_id: z.boolean().optional(),
  location_detail: z.boolean().optional(),
}).strict()

export const device_location_logFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_location_logFindFirstOrThrowArgs> = z.object({
  select: device_location_logSelectSchema.optional(),
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithRelationInputSchema.array(),device_location_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_location_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_location_logScalarFieldEnumSchema,Device_location_logScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_location_logFindFirstOrThrowArgsSchema;
