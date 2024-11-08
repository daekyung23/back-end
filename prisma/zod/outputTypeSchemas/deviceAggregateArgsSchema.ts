import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deviceWhereInputSchema } from '../inputTypeSchemas/deviceWhereInputSchema'
import { deviceOrderByWithRelationInputSchema } from '../inputTypeSchemas/deviceOrderByWithRelationInputSchema'
import { deviceWhereUniqueInputSchema } from '../inputTypeSchemas/deviceWhereUniqueInputSchema'

export const deviceAggregateArgsSchema: z.ZodType<Prisma.deviceAggregateArgs> = z.object({
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithRelationInputSchema.array(),deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default deviceAggregateArgsSchema;
