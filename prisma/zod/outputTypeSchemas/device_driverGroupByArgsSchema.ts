import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverWhereInputSchema } from '../inputTypeSchemas/device_driverWhereInputSchema'
import { device_driverOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_driverOrderByWithAggregationInputSchema'
import { Device_driverScalarFieldEnumSchema } from '../inputTypeSchemas/Device_driverScalarFieldEnumSchema'
import { device_driverScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_driverScalarWhereWithAggregatesInputSchema'

export const device_driverGroupByArgsSchema: z.ZodType<Prisma.device_driverGroupByArgs> = z.object({
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithAggregationInputSchema.array(),device_driverOrderByWithAggregationInputSchema ]).optional(),
  by: Device_driverScalarFieldEnumSchema.array(),
  having: device_driverScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_driverGroupByArgsSchema;
