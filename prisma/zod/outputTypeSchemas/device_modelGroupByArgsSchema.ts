import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelWhereInputSchema } from '../inputTypeSchemas/device_modelWhereInputSchema'
import { device_modelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_modelOrderByWithAggregationInputSchema'
import { Device_modelScalarFieldEnumSchema } from '../inputTypeSchemas/Device_modelScalarFieldEnumSchema'
import { device_modelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_modelScalarWhereWithAggregatesInputSchema'

export const device_modelGroupByArgsSchema: z.ZodType<Prisma.device_modelGroupByArgs> = z.object({
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithAggregationInputSchema.array(),device_modelOrderByWithAggregationInputSchema ]).optional(),
  by: Device_modelScalarFieldEnumSchema.array(),
  having: device_modelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_modelGroupByArgsSchema;
