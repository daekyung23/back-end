import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeWhereInputSchema } from '../inputTypeSchemas/device_approval_typeWhereInputSchema'
import { device_approval_typeOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_approval_typeOrderByWithRelationInputSchema'
import { device_approval_typeWhereUniqueInputSchema } from '../inputTypeSchemas/device_approval_typeWhereUniqueInputSchema'

export const device_approval_typeAggregateArgsSchema: z.ZodType<Prisma.device_approval_typeAggregateArgs> = z.object({
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithRelationInputSchema.array(),device_approval_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approval_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_approval_typeAggregateArgsSchema;
