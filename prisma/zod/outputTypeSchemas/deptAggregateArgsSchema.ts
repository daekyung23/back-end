import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptWhereInputSchema } from '../inputTypeSchemas/deptWhereInputSchema'
import { deptOrderByWithRelationInputSchema } from '../inputTypeSchemas/deptOrderByWithRelationInputSchema'
import { deptWhereUniqueInputSchema } from '../inputTypeSchemas/deptWhereUniqueInputSchema'

export const deptAggregateArgsSchema: z.ZodType<Prisma.deptAggregateArgs> = z.object({
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithRelationInputSchema.array(),deptOrderByWithRelationInputSchema ]).optional(),
  cursor: deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default deptAggregateArgsSchema;
