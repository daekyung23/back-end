import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionWhereInputSchema } from '../inputTypeSchemas/device_optionWhereInputSchema'
import { device_optionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_optionOrderByWithAggregationInputSchema'
import { Device_optionScalarFieldEnumSchema } from '../inputTypeSchemas/Device_optionScalarFieldEnumSchema'
import { device_optionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_optionScalarWhereWithAggregatesInputSchema'

export const device_optionGroupByArgsSchema: z.ZodType<Prisma.device_optionGroupByArgs> = z.object({
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithAggregationInputSchema.array(),device_optionOrderByWithAggregationInputSchema ]).optional(),
  by: Device_optionScalarFieldEnumSchema.array(),
  having: device_optionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_optionGroupByArgsSchema;
