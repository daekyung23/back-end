import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_location_logWhereInputSchema } from '../inputTypeSchemas/device_location_logWhereInputSchema'
import { device_location_logOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_location_logOrderByWithRelationInputSchema'
import { device_location_logWhereUniqueInputSchema } from '../inputTypeSchemas/device_location_logWhereUniqueInputSchema'

export const device_location_logAggregateArgsSchema: z.ZodType<Prisma.device_location_logAggregateArgs> = z.object({
  where: device_location_logWhereInputSchema.optional(),
  orderBy: z.union([ device_location_logOrderByWithRelationInputSchema.array(),device_location_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_location_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_location_logAggregateArgsSchema;
