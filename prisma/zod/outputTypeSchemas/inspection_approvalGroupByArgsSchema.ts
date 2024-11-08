import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { inspection_approvalWhereInputSchema } from '../inputTypeSchemas/inspection_approvalWhereInputSchema'
import { inspection_approvalOrderByWithAggregationInputSchema } from '../inputTypeSchemas/inspection_approvalOrderByWithAggregationInputSchema'
import { Inspection_approvalScalarFieldEnumSchema } from '../inputTypeSchemas/Inspection_approvalScalarFieldEnumSchema'
import { inspection_approvalScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/inspection_approvalScalarWhereWithAggregatesInputSchema'

export const inspection_approvalGroupByArgsSchema: z.ZodType<Prisma.inspection_approvalGroupByArgs> = z.object({
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithAggregationInputSchema.array(),inspection_approvalOrderByWithAggregationInputSchema ]).optional(),
  by: Inspection_approvalScalarFieldEnumSchema.array(),
  having: inspection_approvalScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default inspection_approvalGroupByArgsSchema;
