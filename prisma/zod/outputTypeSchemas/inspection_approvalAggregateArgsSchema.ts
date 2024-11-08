import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { inspection_approvalWhereInputSchema } from '../inputTypeSchemas/inspection_approvalWhereInputSchema'
import { inspection_approvalOrderByWithRelationInputSchema } from '../inputTypeSchemas/inspection_approvalOrderByWithRelationInputSchema'
import { inspection_approvalWhereUniqueInputSchema } from '../inputTypeSchemas/inspection_approvalWhereUniqueInputSchema'

export const inspection_approvalAggregateArgsSchema: z.ZodType<Prisma.inspection_approvalAggregateArgs> = z.object({
  where: inspection_approvalWhereInputSchema.optional(),
  orderBy: z.union([ inspection_approvalOrderByWithRelationInputSchema.array(),inspection_approvalOrderByWithRelationInputSchema ]).optional(),
  cursor: inspection_approvalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default inspection_approvalAggregateArgsSchema;
