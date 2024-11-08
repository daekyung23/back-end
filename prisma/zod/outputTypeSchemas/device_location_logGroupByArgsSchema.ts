import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logWhereInputSchema } from '../inputTypeSchemas/device_location_logWhereInputSchema'
import { device_location_logOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_location_logOrderByWithAggregationInputSchema'
import { Device_location_logScalarFieldEnumSchema } from '../inputTypeSchemas/Device_location_logScalarFieldEnumSchema'
import { device_location_logScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_location_logScalarWhereWithAggregatesInputSchema'

export const device_location_logGroupByArgsSchema: z.ZodType<Prisma.device_location_logGroupByArgs> = z.object({
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithAggregationInputSchema.array(),device_location_logOrderByWithAggregationInputSchema ]).optional(),
  by: Device_location_logScalarFieldEnumSchema.array(),
  having: device_location_logScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_location_logGroupByArgsSchema;
