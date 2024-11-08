import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_inspection_logWhereInputSchema } from '../inputTypeSchemas/device_inspection_logWhereInputSchema'
import { device_inspection_logOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_inspection_logOrderByWithRelationInputSchema'
import { device_inspection_logWhereUniqueInputSchema } from '../inputTypeSchemas/device_inspection_logWhereUniqueInputSchema'

export const device_inspection_logAggregateArgsSchema: z.ZodType<Prisma.device_inspection_logAggregateArgs> = z.object({
  where: device_inspection_logWhereInputSchema.optional(),
  orderBy: z.union([ device_inspection_logOrderByWithRelationInputSchema.array(),device_inspection_logOrderByWithRelationInputSchema ]).optional(),
  cursor: device_inspection_logWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_inspection_logAggregateArgsSchema;
