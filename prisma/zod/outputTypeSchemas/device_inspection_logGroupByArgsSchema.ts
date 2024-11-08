import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_inspection_logWhereInputSchema } from '../inputTypeSchemas/device_inspection_logWhereInputSchema'
import { device_inspection_logOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_inspection_logOrderByWithAggregationInputSchema'
import { Device_inspection_logScalarFieldEnumSchema } from '../inputTypeSchemas/Device_inspection_logScalarFieldEnumSchema'
import { device_inspection_logScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_inspection_logScalarWhereWithAggregatesInputSchema'

export const device_inspection_logGroupByArgsSchema: z.ZodType<Prisma.device_inspection_logGroupByArgs> = z.object({
  where: device_inspection_logWhereInputSchema.optional(),
  orderBy: z.union([ device_inspection_logOrderByWithAggregationInputSchema.array(),device_inspection_logOrderByWithAggregationInputSchema ]).optional(),
  by: Device_inspection_logScalarFieldEnumSchema.array(),
  having: device_inspection_logScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_inspection_logGroupByArgsSchema;
