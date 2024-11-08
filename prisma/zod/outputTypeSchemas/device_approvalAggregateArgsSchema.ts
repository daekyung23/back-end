import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approvalWhereInputSchema } from '../inputTypeSchemas/device_approvalWhereInputSchema'
import { device_approvalOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_approvalOrderByWithRelationInputSchema'
import { device_approvalWhereUniqueInputSchema } from '../inputTypeSchemas/device_approvalWhereUniqueInputSchema'

export const device_approvalAggregateArgsSchema: z.ZodType<Prisma.device_approvalAggregateArgs> = z.object({
  where: device_approvalWhereInputSchema.optional(),
  orderBy: z.union([ device_approvalOrderByWithRelationInputSchema.array(),device_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_approvalAggregateArgsSchema;
