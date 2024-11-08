import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelWhereInputSchema } from '../inputTypeSchemas/option_modelWhereInputSchema'
import { option_modelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/option_modelOrderByWithAggregationInputSchema'
import { Option_modelScalarFieldEnumSchema } from '../inputTypeSchemas/Option_modelScalarFieldEnumSchema'
import { option_modelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/option_modelScalarWhereWithAggregatesInputSchema'

export const option_modelGroupByArgsSchema: z.ZodType<Prisma.option_modelGroupByArgs> = z.object({
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithAggregationInputSchema.array(),option_modelOrderByWithAggregationInputSchema ]).optional(),
  by: Option_modelScalarFieldEnumSchema.array(),
  having: option_modelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default option_modelGroupByArgsSchema;
