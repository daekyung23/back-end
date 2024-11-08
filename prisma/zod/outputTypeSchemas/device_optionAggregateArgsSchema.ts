import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionWhereInputSchema } from '../inputTypeSchemas/device_optionWhereInputSchema'
import { device_optionOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_optionOrderByWithRelationInputSchema'
import { device_optionWhereUniqueInputSchema } from '../inputTypeSchemas/device_optionWhereUniqueInputSchema'

export const device_optionAggregateArgsSchema: z.ZodType<Prisma.device_optionAggregateArgs> = z.object({
  where: device_optionWhereInputSchema.optional(),
  orderBy: z.union([ device_optionOrderByWithRelationInputSchema.array(),device_optionOrderByWithRelationInputSchema ]).optional(),
  cursor: device_optionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_optionAggregateArgsSchema;
