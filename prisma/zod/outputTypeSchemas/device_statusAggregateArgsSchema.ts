import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusWhereInputSchema } from '../inputTypeSchemas/device_statusWhereInputSchema'
import { device_statusOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_statusOrderByWithRelationInputSchema'
import { device_statusWhereUniqueInputSchema } from '../inputTypeSchemas/device_statusWhereUniqueInputSchema'

export const device_statusAggregateArgsSchema: z.ZodType<Prisma.device_statusAggregateArgs> = z.object({
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithRelationInputSchema.array(),device_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: device_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_statusAggregateArgsSchema;
