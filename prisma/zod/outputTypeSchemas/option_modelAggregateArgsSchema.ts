import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { option_modelWhereInputSchema } from '../inputTypeSchemas/option_modelWhereInputSchema'
import { option_modelOrderByWithRelationInputSchema } from '../inputTypeSchemas/option_modelOrderByWithRelationInputSchema'
import { option_modelWhereUniqueInputSchema } from '../inputTypeSchemas/option_modelWhereUniqueInputSchema'

export const option_modelAggregateArgsSchema: z.ZodType<Prisma.option_modelAggregateArgs> = z.object({
  where: option_modelWhereInputSchema.optional(),
  orderBy: z.union([ option_modelOrderByWithRelationInputSchema.array(),option_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: option_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default option_modelAggregateArgsSchema;
