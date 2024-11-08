import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusWhereInputSchema } from '../inputTypeSchemas/device_statusWhereInputSchema'
import { device_statusOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_statusOrderByWithAggregationInputSchema'
import { Device_statusScalarFieldEnumSchema } from '../inputTypeSchemas/Device_statusScalarFieldEnumSchema'
import { device_statusScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_statusScalarWhereWithAggregatesInputSchema'

export const device_statusGroupByArgsSchema: z.ZodType<Prisma.device_statusGroupByArgs> = z.object({
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithAggregationInputSchema.array(),device_statusOrderByWithAggregationInputSchema ]).optional(),
  by: Device_statusScalarFieldEnumSchema.array(),
  having: device_statusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_statusGroupByArgsSchema;
