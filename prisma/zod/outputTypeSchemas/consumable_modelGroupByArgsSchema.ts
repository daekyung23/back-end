import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelWhereInputSchema } from '../inputTypeSchemas/consumable_modelWhereInputSchema'
import { consumable_modelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/consumable_modelOrderByWithAggregationInputSchema'
import { Consumable_modelScalarFieldEnumSchema } from '../inputTypeSchemas/Consumable_modelScalarFieldEnumSchema'
import { consumable_modelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/consumable_modelScalarWhereWithAggregatesInputSchema'

export const consumable_modelGroupByArgsSchema: z.ZodType<Prisma.consumable_modelGroupByArgs> = z.object({
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithAggregationInputSchema.array(),consumable_modelOrderByWithAggregationInputSchema ]).optional(),
  by: Consumable_modelScalarFieldEnumSchema.array(),
  having: consumable_modelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default consumable_modelGroupByArgsSchema;
