import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationWhereInputSchema } from '../inputTypeSchemas/locationWhereInputSchema'
import { locationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/locationOrderByWithAggregationInputSchema'
import { LocationScalarFieldEnumSchema } from '../inputTypeSchemas/LocationScalarFieldEnumSchema'
import { locationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/locationScalarWhereWithAggregatesInputSchema'

export const locationGroupByArgsSchema: z.ZodType<Prisma.locationGroupByArgs> = z.object({
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithAggregationInputSchema.array(),locationOrderByWithAggregationInputSchema ]).optional(),
  by: LocationScalarFieldEnumSchema.array(),
  having: locationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default locationGroupByArgsSchema;
