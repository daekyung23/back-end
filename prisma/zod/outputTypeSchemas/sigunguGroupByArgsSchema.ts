import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { sigunguWhereInputSchema } from '../inputTypeSchemas/sigunguWhereInputSchema'
import { sigunguOrderByWithAggregationInputSchema } from '../inputTypeSchemas/sigunguOrderByWithAggregationInputSchema'
import { SigunguScalarFieldEnumSchema } from '../inputTypeSchemas/SigunguScalarFieldEnumSchema'
import { sigunguScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/sigunguScalarWhereWithAggregatesInputSchema'

export const sigunguGroupByArgsSchema: z.ZodType<Prisma.sigunguGroupByArgs> = z.object({
  where: sigunguWhereInputSchema.optional(),
  orderBy: z.union([ sigunguOrderByWithAggregationInputSchema.array(),sigunguOrderByWithAggregationInputSchema ]).optional(),
  by: SigunguScalarFieldEnumSchema.array(),
  having: sigunguScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default sigunguGroupByArgsSchema;
