import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationWhereInputSchema } from '../inputTypeSchemas/locationWhereInputSchema'
import { locationOrderByWithRelationInputSchema } from '../inputTypeSchemas/locationOrderByWithRelationInputSchema'
import { locationWhereUniqueInputSchema } from '../inputTypeSchemas/locationWhereUniqueInputSchema'

export const locationAggregateArgsSchema: z.ZodType<Prisma.locationAggregateArgs> = z.object({
  where: locationWhereInputSchema.optional(),
  orderBy: z.union([ locationOrderByWithRelationInputSchema.array(),locationOrderByWithRelationInputSchema ]).optional(),
  cursor: locationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default locationAggregateArgsSchema;
