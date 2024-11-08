import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { consumable_modelWhereInputSchema } from '../inputTypeSchemas/consumable_modelWhereInputSchema'
import { consumable_modelOrderByWithRelationInputSchema } from '../inputTypeSchemas/consumable_modelOrderByWithRelationInputSchema'
import { consumable_modelWhereUniqueInputSchema } from '../inputTypeSchemas/consumable_modelWhereUniqueInputSchema'

export const consumable_modelAggregateArgsSchema: z.ZodType<Prisma.consumable_modelAggregateArgs> = z.object({
  where: consumable_modelWhereInputSchema.optional(),
  orderBy: z.union([ consumable_modelOrderByWithRelationInputSchema.array(),consumable_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: consumable_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default consumable_modelAggregateArgsSchema;
