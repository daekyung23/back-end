import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_clientWhereInputSchema } from '../inputTypeSchemas/v_clientWhereInputSchema'
import { v_clientOrderByWithAggregationInputSchema } from '../inputTypeSchemas/v_clientOrderByWithAggregationInputSchema'
import { V_clientScalarFieldEnumSchema } from '../inputTypeSchemas/V_clientScalarFieldEnumSchema'
import { v_clientScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/v_clientScalarWhereWithAggregatesInputSchema'

export const v_clientGroupByArgsSchema: z.ZodType<Prisma.v_clientGroupByArgs> = z.object({
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithAggregationInputSchema.array(),v_clientOrderByWithAggregationInputSchema ]).optional(),
  by: V_clientScalarFieldEnumSchema.array(),
  having: v_clientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default v_clientGroupByArgsSchema;
