import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereInputSchema'
import { device_option_compatibilityOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_option_compatibilityOrderByWithRelationInputSchema'
import { device_option_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereUniqueInputSchema'

export const device_option_compatibilityAggregateArgsSchema: z.ZodType<Prisma.device_option_compatibilityAggregateArgs> = z.object({
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithRelationInputSchema.array(),device_option_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_option_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_option_compatibilityAggregateArgsSchema;
