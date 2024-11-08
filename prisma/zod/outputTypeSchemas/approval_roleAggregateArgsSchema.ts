import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleWhereInputSchema } from '../inputTypeSchemas/approval_roleWhereInputSchema'
import { approval_roleOrderByWithRelationInputSchema } from '../inputTypeSchemas/approval_roleOrderByWithRelationInputSchema'
import { approval_roleWhereUniqueInputSchema } from '../inputTypeSchemas/approval_roleWhereUniqueInputSchema'

export const approval_roleAggregateArgsSchema: z.ZodType<Prisma.approval_roleAggregateArgs> = z.object({
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithRelationInputSchema.array(),approval_roleOrderByWithRelationInputSchema ]).optional(),
  cursor: approval_roleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default approval_roleAggregateArgsSchema;
