import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_client_branchWhereInputSchema } from '../inputTypeSchemas/v_client_branchWhereInputSchema'
import { v_client_branchOrderByWithRelationInputSchema } from '../inputTypeSchemas/v_client_branchOrderByWithRelationInputSchema'
import { v_client_branchWhereUniqueInputSchema } from '../inputTypeSchemas/v_client_branchWhereUniqueInputSchema'

export const v_client_branchAggregateArgsSchema: z.ZodType<Prisma.v_client_branchAggregateArgs> = z.object({
  where: v_client_branchWhereInputSchema.optional(),
  orderBy: z.union([ v_client_branchOrderByWithRelationInputSchema.array(),v_client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: v_client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default v_client_branchAggregateArgsSchema;
