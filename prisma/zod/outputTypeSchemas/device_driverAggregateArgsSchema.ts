import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_driverWhereInputSchema } from '../inputTypeSchemas/device_driverWhereInputSchema'
import { device_driverOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_driverOrderByWithRelationInputSchema'
import { device_driverWhereUniqueInputSchema } from '../inputTypeSchemas/device_driverWhereUniqueInputSchema'

export const device_driverAggregateArgsSchema: z.ZodType<Prisma.device_driverAggregateArgs> = z.object({
  where: device_driverWhereInputSchema.optional(),
  orderBy: z.union([ device_driverOrderByWithRelationInputSchema.array(),device_driverOrderByWithRelationInputSchema ]).optional(),
  cursor: device_driverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_driverAggregateArgsSchema;
