import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptWhereInputSchema } from '../inputTypeSchemas/deptWhereInputSchema'
import { deptOrderByWithAggregationInputSchema } from '../inputTypeSchemas/deptOrderByWithAggregationInputSchema'
import { DeptScalarFieldEnumSchema } from '../inputTypeSchemas/DeptScalarFieldEnumSchema'
import { deptScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/deptScalarWhereWithAggregatesInputSchema'

export const deptGroupByArgsSchema: z.ZodType<Prisma.deptGroupByArgs> = z.object({
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithAggregationInputSchema.array(),deptOrderByWithAggregationInputSchema ]).optional(),
  by: DeptScalarFieldEnumSchema.array(),
  having: deptScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default deptGroupByArgsSchema;
