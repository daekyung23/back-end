import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereInputSchema'
import { device_consumable_compatibilityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityOrderByWithAggregationInputSchema'
import { Device_consumable_compatibilityScalarFieldEnumSchema } from '../inputTypeSchemas/Device_consumable_compatibilityScalarFieldEnumSchema'
import { device_consumable_compatibilityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityScalarWhereWithAggregatesInputSchema'

export const device_consumable_compatibilityGroupByArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityGroupByArgs> = z.object({
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithAggregationInputSchema.array(),device_consumable_compatibilityOrderByWithAggregationInputSchema ]).optional(),
  by: Device_consumable_compatibilityScalarFieldEnumSchema.array(),
  having: device_consumable_compatibilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_consumable_compatibilityGroupByArgsSchema;
