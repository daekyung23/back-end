import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptWhereInputSchema } from '../inputTypeSchemas/v_deptWhereInputSchema'
import { v_deptOrderByWithRelationInputSchema } from '../inputTypeSchemas/v_deptOrderByWithRelationInputSchema'
import { v_deptWhereUniqueInputSchema } from '../inputTypeSchemas/v_deptWhereUniqueInputSchema'

export const v_deptAggregateArgsSchema: z.ZodType<Prisma.v_deptAggregateArgs> = z.object({
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithRelationInputSchema.array(),v_deptOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default v_deptAggregateArgsSchema;
