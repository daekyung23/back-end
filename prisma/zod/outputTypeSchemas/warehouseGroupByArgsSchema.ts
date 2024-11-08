import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { warehouseWhereInputSchema } from '../inputTypeSchemas/warehouseWhereInputSchema'
import { warehouseOrderByWithAggregationInputSchema } from '../inputTypeSchemas/warehouseOrderByWithAggregationInputSchema'
import { WarehouseScalarFieldEnumSchema } from '../inputTypeSchemas/WarehouseScalarFieldEnumSchema'
import { warehouseScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/warehouseScalarWhereWithAggregatesInputSchema'

export const warehouseGroupByArgsSchema: z.ZodType<Prisma.warehouseGroupByArgs> = z.object({
  where: warehouseWhereInputSchema.optional(),
  orderBy: z.union([ warehouseOrderByWithAggregationInputSchema.array(),warehouseOrderByWithAggregationInputSchema ]).optional(),
  by: WarehouseScalarFieldEnumSchema.array(),
  having: warehouseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default warehouseGroupByArgsSchema;
