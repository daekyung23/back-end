import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereInputSchema'
import { device_consumable_compatibilityOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityOrderByWithRelationInputSchema'
import { device_consumable_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereUniqueInputSchema'

export const device_consumable_compatibilityAggregateArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityAggregateArgs> = z.object({
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithRelationInputSchema.array(),device_consumable_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_consumable_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_consumable_compatibilityAggregateArgsSchema;
