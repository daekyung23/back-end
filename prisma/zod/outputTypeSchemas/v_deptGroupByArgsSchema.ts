import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptWhereInputSchema } from '../inputTypeSchemas/v_deptWhereInputSchema'
import { v_deptOrderByWithAggregationInputSchema } from '../inputTypeSchemas/v_deptOrderByWithAggregationInputSchema'
import { V_deptScalarFieldEnumSchema } from '../inputTypeSchemas/V_deptScalarFieldEnumSchema'
import { v_deptScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/v_deptScalarWhereWithAggregatesInputSchema'

export const v_deptGroupByArgsSchema: z.ZodType<Prisma.v_deptGroupByArgs> = z.object({
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithAggregationInputSchema.array(),v_deptOrderByWithAggregationInputSchema ]).optional(),
  by: V_deptScalarFieldEnumSchema.array(),
  having: v_deptScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default v_deptGroupByArgsSchema;
