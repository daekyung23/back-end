import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereInputSchema'
import { device_option_compatibilityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_option_compatibilityOrderByWithAggregationInputSchema'
import { Device_option_compatibilityScalarFieldEnumSchema } from '../inputTypeSchemas/Device_option_compatibilityScalarFieldEnumSchema'
import { device_option_compatibilityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_option_compatibilityScalarWhereWithAggregatesInputSchema'

export const device_option_compatibilityGroupByArgsSchema: z.ZodType<Prisma.device_option_compatibilityGroupByArgs> = z.object({
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithAggregationInputSchema.array(),device_option_compatibilityOrderByWithAggregationInputSchema ]).optional(),
  by: Device_option_compatibilityScalarFieldEnumSchema.array(),
  having: device_option_compatibilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_option_compatibilityGroupByArgsSchema;
