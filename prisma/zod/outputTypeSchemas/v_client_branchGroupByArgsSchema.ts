import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_client_branchWhereInputSchema } from '../inputTypeSchemas/v_client_branchWhereInputSchema'
import { v_client_branchOrderByWithAggregationInputSchema } from '../inputTypeSchemas/v_client_branchOrderByWithAggregationInputSchema'
import { V_client_branchScalarFieldEnumSchema } from '../inputTypeSchemas/V_client_branchScalarFieldEnumSchema'
import { v_client_branchScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/v_client_branchScalarWhereWithAggregatesInputSchema'

export const v_client_branchGroupByArgsSchema: z.ZodType<Prisma.v_client_branchGroupByArgs> = z.object({
  where: v_client_branchWhereInputSchema.optional(),
  orderBy: z.union([ v_client_branchOrderByWithAggregationInputSchema.array(),v_client_branchOrderByWithAggregationInputSchema ]).optional(),
  by: V_client_branchScalarFieldEnumSchema.array(),
  having: v_client_branchScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default v_client_branchGroupByArgsSchema;
