import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeWhereInputSchema } from '../inputTypeSchemas/call_typeWhereInputSchema'
import { call_typeOrderByWithRelationInputSchema } from '../inputTypeSchemas/call_typeOrderByWithRelationInputSchema'
import { call_typeWhereUniqueInputSchema } from '../inputTypeSchemas/call_typeWhereUniqueInputSchema'

export const call_typeAggregateArgsSchema: z.ZodType<Prisma.call_typeAggregateArgs> = z.object({
  where: call_typeWhereInputSchema.optional(),
  orderBy: z.union([ call_typeOrderByWithRelationInputSchema.array(),call_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: call_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default call_typeAggregateArgsSchema;
