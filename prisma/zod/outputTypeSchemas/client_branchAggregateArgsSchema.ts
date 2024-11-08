import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_branchWhereInputSchema } from '../inputTypeSchemas/client_branchWhereInputSchema'
import { client_branchOrderByWithRelationInputSchema } from '../inputTypeSchemas/client_branchOrderByWithRelationInputSchema'
import { client_branchWhereUniqueInputSchema } from '../inputTypeSchemas/client_branchWhereUniqueInputSchema'

export const client_branchAggregateArgsSchema: z.ZodType<Prisma.client_branchAggregateArgs> = z.object({
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithRelationInputSchema.array(),client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default client_branchAggregateArgsSchema;
