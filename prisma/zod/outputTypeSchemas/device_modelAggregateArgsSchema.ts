import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelWhereInputSchema } from '../inputTypeSchemas/device_modelWhereInputSchema'
import { device_modelOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_modelOrderByWithRelationInputSchema'
import { device_modelWhereUniqueInputSchema } from '../inputTypeSchemas/device_modelWhereUniqueInputSchema'

export const device_modelAggregateArgsSchema: z.ZodType<Prisma.device_modelAggregateArgs> = z.object({
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithRelationInputSchema.array(),device_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: device_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_modelAggregateArgsSchema;
