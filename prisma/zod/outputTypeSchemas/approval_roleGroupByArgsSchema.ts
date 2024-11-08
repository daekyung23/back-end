import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { approval_roleWhereInputSchema } from '../inputTypeSchemas/approval_roleWhereInputSchema'
import { approval_roleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/approval_roleOrderByWithAggregationInputSchema'
import { Approval_roleScalarFieldEnumSchema } from '../inputTypeSchemas/Approval_roleScalarFieldEnumSchema'
import { approval_roleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/approval_roleScalarWhereWithAggregatesInputSchema'

export const approval_roleGroupByArgsSchema: z.ZodType<Prisma.approval_roleGroupByArgs> = z.object({
  where: approval_roleWhereInputSchema.optional(),
  orderBy: z.union([ approval_roleOrderByWithAggregationInputSchema.array(),approval_roleOrderByWithAggregationInputSchema ]).optional(),
  by: Approval_roleScalarFieldEnumSchema.array(),
  having: approval_roleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default approval_roleGroupByArgsSchema;
