import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseWhereInputSchema } from '../inputTypeSchemas/warehouseWhereInputSchema'
import { warehouseOrderByWithRelationInputSchema } from '../inputTypeSchemas/warehouseOrderByWithRelationInputSchema'
import { warehouseWhereUniqueInputSchema } from '../inputTypeSchemas/warehouseWhereUniqueInputSchema'

export const warehouseAggregateArgsSchema: z.ZodType<Prisma.warehouseAggregateArgs> = z.object({
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithRelationInputSchema.array(),warehouseOrderByWithRelationInputSchema ]).optional(),
  cursor: warehouseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default warehouseAggregateArgsSchema;
